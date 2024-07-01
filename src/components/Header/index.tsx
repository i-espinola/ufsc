import React, { useState, useEffect, useCallback } from 'react';
import { Container, Brand, NavBar } from '@app/components';
import { HeaderStyled, HeaderItens } from './styled';

export interface HeaderProps {
  autoHidden?: boolean;
}

const Component = (props: HeaderProps, ref: any) => {
  const [visible, setVisible] = useState(true);
  let lastScroll = 0;

  const handleScroll = useCallback(() => {
    const currentPositionY = window.pageYOffset;
    const visible = lastScroll > currentPositionY;
    setVisible(visible);
    lastScroll = currentPositionY;
  }, []);

  useEffect(() => {
    if (props.autoHidden) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <HeaderStyled className={visible ? '' : 'auto-hidden'} ref={ref}>
      <Container>
        <HeaderItens>
          <Brand size={22} />
          <NavBar />
        </HeaderItens>
      </Container>
    </HeaderStyled>
  );
};

const Header = React.forwardRef(Component);

export default Header;
export { Header };
