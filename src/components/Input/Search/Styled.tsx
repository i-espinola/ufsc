import styled from 'styled-components';

const SearchStyle = styled.form`
  line-height: 12px;
  border-color: inherit;
  border-radius: 8px;
  background: #edf1f2;
  border: 1px solid #e0e0e0;

  display: flex;
  justify-content: left;
  align-items: center;
  flex: 1 1 50%;
  transition: all 0.4s ease-in-out 0s;

  &:active,
  &:focus,
  &:hover {
    border-color: #fff;
    box-shadow: inset 0 0 6px 0px #e0e0e0;
    border: 1px solid #e0e0e0;
  }

  > svg {
    margin-left: 15px;

    > path,
    > rect {
      stroke: #a3a3a3;
    }
  }

  > input {
    font-family: 'Avenir';
    font-style: normal;
    text-align: left;
    outline: none;
    color: #111111;
    background: none;
    width: 100%;
    display: block;
    border: none;
    font-size: 0.9rem;
    line-height: 1rem;
    padding: 0.6rem 15px;

    &:placeholder {
      color: #a3a3a3;
    }
  }

  > button {
    background: none;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  div {
    margin: 0;
  }

  button {
    min-width: auto;
    width: 48px;
    padding: 0;
    background: #fff;
    border: none;
    border-left: 1px solid #e0e0e0;
    border-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  svg {
    path {
      stroke: #848f99;
    }
  }
`;

export default SearchStyle;
export { SearchStyle };
