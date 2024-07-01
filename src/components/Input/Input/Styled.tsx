import Styled, { css } from 'styled-components';
import { tokens } from '@app/styles/theme';

const buttonField = css`
  > button {
    transition: all 0.5s ease-in-out 0s;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: 24px;
      height: 24px;

      > path,
      > rect {
        fill: #ababab;
      }
    }
  }
`;

const FieldBox = Styled.label`
  background: ${({ theme }) =>
    theme.disabled ? tokens.color.light : 'transparent'};
  border: ${tokens.border.light};
  border-width: 2px;
  box-sizing: border-box;
  border-radius: ${tokens.radius.micro};
  margin: 10px 0;
  padding: 7px 15px;
  display: block;
  height: auto;
  transition: all 0.5s ease-in-out 0s;

  > label {
    font-size: ${tokens.fontSize.small};
    line-height: ${tokens.fontSize.default};
    color: ${tokens.color.medium};
    display: flex;
    text-align: left;
  }

  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    > button {
      background: transparent;
      transition: all 0.5s ease-in-out 0s;
      border: none;
      outline: none;
    }

    > input {
      display: flex;
      flex: auto;
      border: none;
      outline: none;
      background: transparent;
      color: ${tokens.color.black};
      transition: all 0.5s ease-in-out 0s;
      font-size: ${tokens.fontSize.default};
      line-height: ${parseInt(tokens.fontSize.default) * 1.2};

      &::placeholder {
        color: ${tokens.color.grey5};
      }

      &:focus {
        border-color: ${tokens.color.black};
      }

      &:disabled {
        background: ${tokens.color.light};
        color: ${tokens.color.medium};
      }
    }
    }

    ${buttonField}
  }

  &:focus-within {
    background: transparent;
    border-color: ${tokens.color.black};
  }
`;

const FieldDefault = Styled.div`
  display: block;
  height: auto;
  text-align: left;
  transition: all 0.5s ease-in-out 0s;
    
  > label {
    font-size: ${tokens.fontSize.small};
    line-height: ${tokens.fontSize.default};
    color: ${tokens.color.medium};
    display: block;
    margin-top:10px;
    padding-left: 15px;
  }

  > div {
    transition: all 0.5s ease-in-out 0s;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding-right: 30px;
    position: relative;
    margin: 5px 0 10px;
    flex-wrap: nowrap;
    border-width: 2px;
    padding: 0 15px;
    display: flex;
    height: 48px;
    border: ${tokens.border.light};
    border-radius: ${tokens.radius.micro};
    background: ${({ theme }) =>
      theme.disabled ? tokens.color.light : 'transparent'};

    > input {
      outline: none;
      border: none;
      transition: all 0.5s ease-in-out 0s;
      background: transparent;
      font-size: ${tokens.fontSize.default};;
      line-height: 20px;
      color: ${tokens.color.black};
      height: 100%;
      width: 100%;

      &::placeholder {
        color: ${tokens.color.grey5};
      }

      &:focus {
        border-color: ${tokens.color.black};
      }

      &:disabled {
        background: ${tokens.color.light};
        color: ${tokens.color.medium};
      }
    }

    &:focus-within {
      background: transparent;
      border-color: ${tokens.color.black};
    }

    ${buttonField}
  }
`;

export default FieldDefault;
export { FieldBox, FieldDefault };
