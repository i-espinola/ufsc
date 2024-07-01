import Image from 'next/image';
import Link from 'next/link';
import { Layout, Title, Box, Container, Row, Col } from '@app/components';

import { Background } from './styled';

const Home = () => {
  return (
    <Background>
      <Layout>
        <Container>
          <Row>
            <Col>
              <Title
                align="center"
                title="BOTOX"
                subtitle="Cuide da sua beleza com segurança e qualidade"
              />
            </Col>
          </Row>
          <Row>
            <Col md={5} style={{ margin: 'auto' }}>
              <Link href="/agendamentos">
                <Box>
                  <>
                    <h2>Agendar procedimento</h2>
                    <p>Garanta o seu procedimento agendando online</p>
                  </>
                </Box>
              </Link>
            </Col>
          </Row>
        </Container>
      </Layout>
    </Background>
  );
};

export default Home;
export { Home };
