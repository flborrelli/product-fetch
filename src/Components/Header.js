import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    color: '#239',
    textTransform: 'uppercase'
  }
  return (
    <nav style={{ fontSize: '20px'}}>
      <NavLink to='/' end activeStyle={activeStyle} style={{ textDecoration: 'none', padding: '10px'}}>
        Home
      </NavLink>
      <NavLink to='products' activeStyle={activeStyle} style={{ textDecoration: 'none'}}>
        Products
      </NavLink>
    </nav>
  )
}

export default Header;
