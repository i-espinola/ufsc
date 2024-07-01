import Styled from 'styled-components';

const StyleError = Styled.dd`
  color: rgb(255, 0, 75);
  transition: all 0.2s ease-in-out 0s;
  margin: 0;
  padding: 0;
  /* margin-top: 15px; */
  font-size: 12px;
  text-align: left;
`;

const InsideLabel = Styled.label`
 
  box-sizing: border-box;
  margin: 10px 0;
  padding: 7px 25px;
  display: block;
  height: auto;
  transition: all 0.2s ease-in-out 0s;

 

  background: #F5F5F5;
  border: 1px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 8px;

  > label {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    text-align: left;
    color: #626262;
    cursor: pointer;
  }

  > div {
    position: relative;

    > button {
      background: transparent;
      background-image: url('/assets/icons/eyes.svg') no-repeat top left;
      transition: all 0.2s ease-in-out 0s;
      border: none;
      outline: none;
    }

    > select {
      background: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      transition: all 0.2s ease-in-out 0s;
      font-family: 'Avenir';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 34px;
      display: flex;
      color: #000000;
      display: block;
      width: 100%;
      cursor: pointer;
      appearance: none;
      z-index:2;

      position: relative;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &:-ms-select-placeholder {
        color: rgba(0, 0, 0, 0.6);
 
      }

      &::-ms-select-placeholder {
        color: rgba(0, 0, 0, 0.6);
 
      }
     
      
    }

    > button {
      position: absolute;
      right: -5px;
      top: 5px;
      width: 24px;
      height: 24px;
      background: red;
      background: transparent;
      background-image: url('/assets/icons/eyes.svg') no-repeat top left;
      transition: all 0.2s ease-in-out 0s;
      border: none;
      outline: none;
      z-index: 9;
      cursor: pointer;

      > svg {
        width: 24px;
        height: 24px;

        > path, 
        > rect {
						fill: #ababab !important;
        }
      }
    }

  }

  
  &:focus-within {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

const OutsideLabel = Styled.div`
  display: block;
  height: auto;
  text-align: left;
  transition: all 0.2s ease-in-out 0s;

  > label {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    display: block;
    color: #000;
    margin-top:10px;
    padding-left: 15px;
  }

  > select {
    background: #fff;
    border: 2px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 7px;
    margin: 5px 0 10px;
    outline: none;
    font-size: 18px;
    transition: all 0.2s ease-in-out 0s;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: left;
    color: #000000;
    display: block;
    width: 100%;
    height: 48px;
    padding: 0 15px;
 

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }

    &:-ms-select-placeholder {
      color: rgba(0, 0, 0, 0.6);
    }

    &::-ms-select-placeholder {
      color: rgba(0, 0, 0, 0.6);
    }

    &:focus {
      border-color: #000000;
    }

    &:disabled {
      background: #F5F5F5;
    }
  }
`;

export const StyledChevron = Styled.div`
  position: absolute;
  right: 0;
  top:0;
  user-select: none;
  z-index:0;
  svg{
    user-select: none;
  }
`;

export default OutsideLabel;
export { InsideLabel, OutsideLabel, StyleError };
