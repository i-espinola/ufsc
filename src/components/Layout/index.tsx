import { Header, Container, Row, Col, Status } from '@app/components';
import { Main } from './styled';

type LayoutType = {
  children: React.ReactNode;
  loading?: boolean;
};

const Layout = (props: LayoutType) => {
  const { children, loading } = props;
  if (loading) return <Status loading={true} />;

  return (
    <>
      <Header autoHidden />
      <Main>
        <Container>
          <Row>
            <Col>
              <>{children}</>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
export { Layout };
