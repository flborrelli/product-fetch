import React, { useState } from 'react';
import { GlobalStyle, Container } from './global.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Header';
import Product from './Components/Product';


const App = () => {
  return(
    <BrowserRouter>
      <GlobalStyle/>
        <Container>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='products/*' element={<Products/>} />
            <Route path='products/:id' element={<Product/>} />
          </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App;
