import styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  &.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  &:before,
  &:after {
    box-sizing: border-box;
  }
`;

export { RowStyle };
