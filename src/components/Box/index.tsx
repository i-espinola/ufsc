import React from 'react';
import { BoxStyled } from './styled';

export interface BoxChild {
  children?: JSX.Element;
}

const Box = (props: BoxChild) => <BoxStyled>{props.children}</BoxStyled>;

export default Box;
export { Box };
