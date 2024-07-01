import Styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const NavBarStyle = Styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

    & a {
      transition: all 0.0s ease;
      margin: 5px 15px;

      &.active {
        margin: 0;
        
        & * {
          padding: 5px 15px;
          border-radius: ${tokens.radius.micro};
          background: ${tokens.color.primary};
          color: ${tokens.color.white};
        }
      }

      &:hover {

        &:not(.active) {
          margin: 0;

          & li {
            padding: 5px 15px;
            border-radius: ${tokens.radius.micro};
            backdrop-filter: saturate(180%) blur(20px);
            background-color: rgba(255, 255, 255, 0.4);
            color: ${tokens.color.medium};
          }
        }
      }
    }

    & li {
      font-style: normal;
      text-transform: uppercase;
      color: ${tokens.color.medium};
      font-family: ${tokens.text.family};
      font-size: ${tokens.fontSize.small};
      text-align: ${tokens.text.textAlign};
      font-weight: ${tokens.textWeight.default};
    }
  }
`;

export default NavBarStyle;
export { NavBarStyle };
