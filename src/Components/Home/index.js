import React from 'react';
import { Container, List } from './styles';
import foto from '../../assets/contato.jpg';

const Home = () => {
  return (
    <Container>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Welcome!</h1>
        <List>
          <li>helloworld@js.com</li>
          <li>React Power</li>
          <li>Tks for your visti!</li>
        </List>
      </div>
    </Container>
  )
};

export default Home;
