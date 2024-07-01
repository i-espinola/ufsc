import React, { ReactChildren } from 'react';
import { ButtonStyle } from './Styled';

export type ButtonProps = {
  key?: any;
  onClick?: () => any;
  block?: boolean;
  variant: 'primary' | 'secondary' | 'default';
  style?: object;
  className?: string;
  children?: React.ReactNode | JSX.Element | string;
  icon?: ReactChildren | JSX.Element | string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children, icon, block, style, variant, type, disabled, onClick } =
    props;

  const cssStyle = {
    width: block ? '100%' : 'auto',
    ...style,
  };

  const concatChild = (
    <>
      {icon}
      {children}
    </>
  );

  return (
    <ButtonStyle
      className={variant}
      style={cssStyle}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  variant: 'default',
  type: 'button',
  style: {},
  block: false,
  disabled: false,
  onClick: () => null,
};

export default Button;
export { Button };
