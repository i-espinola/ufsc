import { useState, useEffect } from 'react';
import useSWR from 'swr';
import {
  Layout,
  Title,
  Box,
  Container,
  Row,
  Col,
  Input,
  Select,
  Button,
} from '@app/components';
import { ContractProcedures } from '@app/types';

import { Background } from './styled';

const fetcher = (url: string, options?: any) =>
  fetch(url, options).then((res) => res.json());

const Schedules = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [select, setSelect] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [procedures, setProcedures] = useState<ContractProcedures[]>([]);
  const dataProcedures = useSWR('/api/procedures', fetcher);
  const proceduresAvailable = procedures.filter(({ available }) => !!available);
  const proceduresOptions = proceduresAvailable.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  useEffect(() => {
    const haveProcedures = dataProcedures.data?.response && !procedures.length;

    if (haveProcedures) {
      setProcedures(dataProcedures.data?.response);
      setLoading(false);
    }
  }, [dataProcedures, procedures]);

  const sendForm = () => {
    const data = {
      name,
      lastName,
      address,
      phone,
      schedule: new Date().toISOString(),
      procedures_id: select?.id,
    };

    fetch('/api/schedules', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Layout loading={loading} background="#fff">
      <Container>
        <Box>
          <>
            <Row>
              <Col>
                <Title
                  align="left"
                  title="Agendamento"
                  subtitle="Reserve o seu horário online"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  name="name"
                  type="text"
                  placeholder="Maria"
                  label="Nome"
                  required
                  value={name}
                  onChange={(event: any) => setName(event.target.value)}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Da Silva"
                  label="Sobrenome"
                  required
                  value={lastName}
                  onChange={(event: any) => setLastName(event.target.value)}
                />
                <Input
                  name="address"
                  type="text"
                  placeholder="Rua das Flores, 123"
                  label="Endereço"
                  required
                  value={address}
                  onChange={(event: any) => setAddress(event.target.value)}
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="48 99999-9999"
                  label="Telefone"
                  required
                  value={phone}
                  onChange={(event: any) => setPhone(event.target.value)}
                />
                <Select
                  name="procedure"
                  label="Procedimento"
                  required
                  value={select?.id}
                  options={proceduresOptions}
                  onChange={(event: any) => {
                    const selectedProcedure = proceduresAvailable.find(
                      (item) => item.id === Number(event.target.value)
                    );
                    setSelect(selectedProcedure);
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="button" onClick={sendForm}>
                  Agendar
                </Button>
              </Col>
            </Row>
          </>
        </Box>
      </Container>
    </Layout>
  );
};

export default Schedules;
export { Schedules };
