import React from 'react';
import { ContainerStyle } from './styled';

export interface ContainerProps {
  fluid?: boolean;
  className: string;
  style: object;
  children?: React.ReactNode | JSX.Element | string;
}

const DivContainer = (props: ContainerProps) => {
  let { children, fluid, className, style } = props;
  className = `${className} ${fluid ? 'fluid' : ''}`;
  return (
    <ContainerStyle style={style} className={className}>
      {children}
    </ContainerStyle>
  );
};

DivContainer.defaultProps = {
  fluid: false,
  className: '',
  style: {},
};

const Container = React.memo(DivContainer);

export default Container;
export { Container };
