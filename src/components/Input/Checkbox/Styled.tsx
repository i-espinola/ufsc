import Styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const CheckboxLabel = Styled.label`
  display: flex;
  align-items: center;
  justify-content: left;
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  line-height: 20px;

  &:hover {
    
    & input {

      &:not([disabled]) {

        &:checked {

          ~ div {
            background: #F0F0F0;
          }
        }
      }
    }
  }

  > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 0;
    height: 0;
    display: none;

    &:focus {
      
      ~ div {
        background: #F0F0F0;
      }
    }

    &:checked {

      ~ div {
        background: ${({ theme }) => theme.color.primary};
        border-color: ${({ theme }) => theme.color.primary};

        &:after {
          display: block;
        }
      }

      &:hover {

        ~ div {
          background: transparent;
          border-color: ${tokens.color.primary};

          &:after {
            left: 4px;
            top: 1.5px;
            width: 4px;
            height: 7px;
            border: solid ${tokens.color.primary};
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      }
    }

    &:disabled {

      ~ div {
        background: #F0F0F0;
        opacity: 0.6;
        pointer-events: none;

        &:after {
          border-color: #F0F0F0;
        }
      }
    }

    &:not(:checked) {

    }
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background: transparent;
    border: 2px solid #C4C4C4;
    border-radius: 5px;
    transition: all 0.2s ease-in-out 0s;

    &:after {
      box-sizing: unset;
      content: '';
      position: absolute;
      display: none;
      left: 4px;
      top: 1.5px;
      width: 4px;
      height: 7px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      box-sizing: unset;
      content: '';
      position: absolute;
      display: none;
    }

    &:before {
      content: '';
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;

export default CheckboxLabel;
export { CheckboxLabel };
