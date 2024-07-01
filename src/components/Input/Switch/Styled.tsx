import Styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const SwitchStyle = Styled.label`
  position: relative;
  display: block;
  width: 40px;
  height: 24px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + span {
        background-color: ${tokens.color.green};

        :before {
          transform: translateX(16px);
          border-color: ${tokens.color.green};
          box-shadow: -2px 0px 2px 0px rgb(111 111 111 / 50%);
        }
      }
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${tokens.radius.default};
    background-color: ${tokens.color.grey4};
    transition: all 0.5s ease;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 1px;
      top: 1px;
      background:${tokens.color.white};
      border: ${tokens.border.white};
      border-color: ${tokens.color.grey4};
      transition: all 0.5s ease;
      border-radius: ${tokens.radius.default};
      box-shadow: 2px 0px 2px 0px rgb(111 111 111 / 50%);
    }
  }
`;

export default SwitchStyle;
export { SwitchStyle };
