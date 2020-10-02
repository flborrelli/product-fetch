import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Header';
import { Product } from './Components/Product';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='products/*' element={<Products/>} />
          <Route path='products/:id' element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
