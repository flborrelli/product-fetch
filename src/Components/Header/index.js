import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

const Header = () => {
  const activeStyle = {
    color: '#239',
    textTransform: 'uppercase'
  }
  return (
    <nav>
      <NavLink to='/' end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to='products' activeStyle={activeStyle}>
        Products
      </NavLink>
    </nav>
  )
}

export default Header;
