import React, { useEffect } from 'react';
import { Container } from './styles';
import {  Loader } from '../../global';
import { Link } from 'react-router-dom';
import { apiEndpoint } from '../../utils/api'; 
import useFetch from '../../hook/useFetch';

const Products = () => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request(apiEndpoint)
  }, [request])

  if(loading) { return <Loader/> };
  if (data === null) return null;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      {
        data.map(product => {
          return (
            <div key={product.id}>
              <Link to={`${product.id}`}>
                <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
                <h1>{product.nome}</h1>
              </Link>
            </div>
          )
        })
      }
    </Container>
  )
}

export default Products;
