import styled from 'styled-components';
import { startAnimation }  from '../../global';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: ${startAnimation} 0.9s forwards;

  img {
    margin-bottom: 2rem;
  }
`

const Price = styled.span`
  padding: 0.5rem;
  background: #91fb5d;
  color: #017e01;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
`

const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;
`

export {
  Container, 
  Price, 
  Description,
}