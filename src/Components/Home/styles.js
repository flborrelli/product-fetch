import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;  
`
const List = styled.ul`
  padding: 0px;
  list-style: none;

  li {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.8rem;
  }

  li::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ddd;
    margin-right: 10px;
}
`

export {
  Container,
  List,
}
