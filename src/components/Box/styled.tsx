import Styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const BoxStyled = Styled.div`
  border-radius: ${tokens.radius.default};
  box-shadow: ${tokens.shadow.default};
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 15px;
  height: 100%;
  width: 100%;
`;

export { BoxStyled };
