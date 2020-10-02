import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, apiEndpoint } from '../utils/api'; 

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchData(`${apiEndpoint}/${params.id}`, setProduct, setLoading)
  }, []);

  if(loading){
    return <div>Loading...</div>
  }
  
  return (
    <div>
      {!loading && (
        <div>
          <h1>{product.nome}</h1>
          <h4>{product.descricao}</h4>
          <h4>{product.preco}</h4>
        </div>
      )}
    </div>
  )
}
