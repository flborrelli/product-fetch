import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  margin-bottom: 1rem;

  ul{
    display: flex;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  ul li {
  margin-right: 1rem;
}
`

const NavBtn = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background: #ddd;
}
`

export {
  Navigation,
  NavBtn,
}