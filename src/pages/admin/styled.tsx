import styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const Card = styled.div`
  text-align: left;
  text-transform: capitalize;
  margin: 25px 0 10px;

  > p {
    text-transform: capitalize;
    margin: 5px 0;
    padding: 0;
  }
`;

const Button = styled.button`
  color: ${tokens.color.black};
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: #ccc;

  &:hover {
    background: ${tokens.color.danger};
  }
`;

export default Card;
export { Card, Button };
