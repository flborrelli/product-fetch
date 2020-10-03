import React, { useEffect } from 'react';
import { Loader } from '../../global';
import { useParams } from 'react-router-dom';
import { apiEndpoint } from '../../utils/api'; 
import { Container, Price, Description } from './styles';
import useFetch from '../../hook/useFetch';

const Product = () => {
  
  const params = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request(`${apiEndpoint}/${params.id}`)
  }, [request, params.id])

  if(loading) { return <Loader/> };
  if (data === null) return null;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <div>
        {
          data.fotos.map(foto => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))
        }
      </div>
      <div>
        <h1>{data.nome}</h1>
        <Price>{data.preco}</Price>
        <Description>{data.descricao}</Description>
      </div>
    </Container>
  )
};

export default Product;
