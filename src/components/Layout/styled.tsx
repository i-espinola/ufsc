import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
`;

export { Main };
