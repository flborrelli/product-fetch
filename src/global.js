import { createGlobalStyle } from 'styled-components';
import styled, { keyframes } from 'styled-components';
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

const Content = styled.div`
  flex: 1;
`

const loaderAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: ${loaderAnimation} 1s infinite;
`

const startAnimation = keyframes`
  to {
    transform: initial;
    opacity: initial;
  }
`

export {
  GlobalStyle,
  Container,
  Content,
  Loader,
  startAnimation,
};