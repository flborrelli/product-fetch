import styled from 'styled-components';
import { startAnimation }  from '../../global';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: ${startAnimation} 0.9s forwards;

  h1 {
    margin: 0.5rem 0;
  }

`

export {
  Container,
}