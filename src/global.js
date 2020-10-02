import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { normalize } from 'polished';


const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  body {
    margin: 2rem;
  }

  img {
    max-width: 100%;
    border-radius: 0.5rem;
  }

  a{
    text-decoration: none;
    color: black;
  }

  h1{
    font-size: 1.4rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
`

export {
  GlobalStyle,
  Container,
};