import { useState, useEffect } from 'react';
import {
  Layout,
  Title,
  Box,
  Container,
  Row,
  Col,
  Margin,
  Divider,
} from '@app/components';
import { ContractSchedules, ContractProcedures } from '@app/types';
import useSWR from 'swr';

import { Card, Button } from './styled';

const fetcher = (url: string, options?: any) =>
  fetch(url, options).then((res) => res.json());

const Admin = () => {
  const [schedules, setSchedules] = useState<ContractSchedules[]>([]);
  const [procedures, setProcedures] = useState<ContractProcedures[]>([]);
  const [loading, setLoading] = useState(true);
  const dataProcedures = useSWR('/api/procedures', fetcher);
  const dataSchedules = useSWR('/api/schedules', fetcher);

  useEffect(() => {
    const haveSchedules = dataSchedules.data?.response && !schedules.length;
    const haveProcedures = dataProcedures.data?.response && !procedures.length;

    if (haveProcedures && haveSchedules) {
      setSchedules(dataSchedules.data?.response);
      setProcedures(dataProcedures.data?.response);
      setLoading(false);
    }
  }, [dataSchedules, dataProcedures]);

  const handleDelete = async (id: number) => {
    const removed = schedules.filter((item) => item.id !== id);
    await fetcher('/api/schedules', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setSchedules(removed);
  };

  const buildSchedules = schedules?.map((schedule: ContractSchedules) => {
    const { name, lastName, phone, address, schedule: d } = schedule;
    const date = new Date(d).toLocaleDateString('pt-BR');
    const hour = new Date(d).toLocaleTimeString('pt-BR');
    const procedure = procedures?.find(
      ({ id }) => Number(schedule.procedures_id) == id
    );

    return (
      <Col key={schedule.id} md={4} lg={6}>
        <Box>
          <>
            <Button type="button" onClick={() => handleDelete(schedule.id)}>
              X
            </Button>
            <Card>
              <p>
                <b>Nome: </b>
                {`${name} ${lastName}`}
              </p>
              <p>
                <b>Telefone: </b>
                {phone}
              </p>
              <p>
                <b>Endereço: </b>
                {address}
              </p>
              <p>
                <b>Data: </b>
                {date}
              </p>
              <p>
                <b>Horário: </b>
                {hour}
              </p>
              <p>
                <b>Procedimento: </b>
                {procedure?.name}
              </p>
            </Card>
          </>
        </Box>
      </Col>
    );
  });

  const buildProcedures = procedures?.map((procedure: ContractProcedures) => {
    const { name, available } = procedure;
    return (
      <Col key={procedure.id}>
        <Box>
          <Card>
            <p>
              <b>Procedimento: </b>
              {name}
            </p>
            <p>
              <b>Status: </b>
              {!!available ? 'Disponível' : 'Indisponível'}
            </p>
          </Card>
        </Box>
      </Col>
    );
  });

  return (
    <Layout loading={loading}>
      <Container>
        <Row>
          <Col>
            <Title
              align="left"
              title="Agendamentos"
              subtitle="Consulte os agendamentos realizados"
            />
            <Divider />
          </Col>
        </Row>
        <Row>{buildSchedules}</Row>
        <Row>
          <Col>
            <Title
              align="left"
              title="Procedimentos"
              subtitle="Consulte os procedimentos disponíveis"
            />
            <Divider />
          </Col>
        </Row>
        <Row>{buildProcedures}</Row>
      </Container>
    </Layout>
  );
};

export default Admin;
