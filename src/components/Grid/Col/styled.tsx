import styled, { css } from 'styled-components';
import { tokens } from '@app/styles/theme';

const ColStyle = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  ${({ theme }) =>
    theme.length
      ? theme?.map((item: any) => screen[item.mediaQuery](item.width))
      : autoWidth}
`;

const autoWidth: any = `
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const width: any = {
  1: `8.33333333%;`,
  2: `16.66666667%;`,
  3: `25%;`,
  4: `33.33333333%;`,
  5: `41.66666667%;`,
  6: `50%;`,
  7: `58.33333333%;`,
  8: `66.66666667%;`,
  9: `75%;`,
  10: `83.33333333%;`,
  11: `91.66666667%;`,
  12: `100%;`,
};

const screen: any = {
  xs: (key: any) => `
    @media (min-width: 448px) {
      flex: 0 0 ${width[key]};
      max-width: ${width[key]};`,
  sm: (key: any) => `
    @media (min-width: 768px) {
      flex: 0 0 ${width[key]};
      max-width: ${width[key]};`,
  md: (key: any) => `
    @media (min-width: 992px) {
      flex: 0 0 ${width[key]};
      max-width: ${width[key]};`,
  lg: (key: any) => `
    @media (min-width: 1200px) {
      flex: 0 0 ${width[key]};
      max-width: ${width[key]};`,
  xl: (key: any) => `
    @media (min-width: 1600px) {
      flex: 0 0 ${width[key]};
      max-width: ${width[key]};`,
};

export { ColStyle };
