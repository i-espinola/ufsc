import React, { useState } from 'react';
import Link from 'next/link';
import { NavBarStyle } from './styled';

export interface MenuList {
  href: string;
  label: string;
}
export interface NavBarprops {
  menuList: MenuList[];
}

const NavBar = (props: NavBarprops) => {
  const [active, setActive] = useState('');

  const handleClick = (e) => {
    const selectAnchor = e?.target?.parentNode?.attributes?.href?.value;
    const selectLi = e?.target?.attributes?.href?.value;
    if (selectLi || selectAnchor) setActive(selectLi || selectAnchor);
  };

  const buildMenu = props.menuList?.map((item) => (
    <Link
      href={item.href}
      key={item.href}
      onClick={handleClick}
      className={active == item.href ? 'active' : ''}
    >
      <li key={item.label}>{item.label}</li>
    </Link>
  ));

  return (
    <NavBarStyle>
      <ul>{buildMenu}</ul>
    </NavBarStyle>
  );
};

NavBar.defaultProps = {
  menuList: [
    {
      href: '/home',
      label: 'Home',
    },
    {
      href: '/agendamentos',
      label: 'Agendamentos',
    },
    {
      href: '/admin',
      label: 'admin',
    },
  ],
};

export default NavBar;
export { NavBar };
