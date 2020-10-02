import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Product from '../Product';
import { fetchData, apiEndpoint } from '../../utils/api'; 

const Products = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(apiEndpoint, setProducts, setLoading)
  }, [])
  console.log(products)

  if(loading) { return <div>Loading...</div>};

  return (
    <div>
      <>
        {
          !loading && products.map(product => {
            return (
              <div key={product.id}>
                <Link to={`${product.id}`}>{product.nome}</Link>
              </div>
            )
          })
        }
      </>
    </div>
  )
}

export default Products;
