import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, NavBtn } from './styles';

const Header = () => {

  const activeStyle = {
    background: '#ddd',

  }

  return (
    <Navigation>
      <ul>
        <li>
          <NavBtn to='/' end activeStyle={activeStyle}>
            Home
          </NavBtn>
        </li>
        <li>
          <NavBtn to='products' activeStyle={activeStyle}>
            Products
          </NavBtn>
        </li>
      </ul> 
    </Navigation>
  )
}

export default Header;
