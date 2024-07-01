import React, { ReactChildren, forwardRef } from 'react';
import Link from 'next/link';
import { AnchorStyle } from './Styled';

export type ButtonProps = {
  key?: any;
  href: string;
  block?: boolean;
  icon?: ReactChildren | JSX.Element | string;
  variant: 'primary' | 'secondary' | 'default';
  style?: object;
  className?: string;
  children?: JSX.Element | JSX.Element | string;
};

const Anchor = (props: ButtonProps) => {
  const { href, icon, children, block, style, variant } = props;

  const cssStyle = {
    width: block ? 'auto' : '',
    ...style,
  };

  const concatChild = (
    <>
      {icon}
      {children}
    </>
  );

  const Anchor = (
    <AnchorStyle className={variant} style={cssStyle}>
      {children}
    </AnchorStyle>
  );

  return <Link href={href}>{Anchor}</Link>;
};

Anchor.defaultProps = {
  href: '/',
  variant: 'default',
  style: {},
  block: false,
};

export default Anchor;
export { Anchor };
