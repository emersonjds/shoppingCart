import React, { useEffect } from 'react';
import BoxItem from '../../components/BoxItem';
import { Container, FltList } from './style';

const Home: React.FC = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const renderItem = ({ item }) => {
    return <BoxItem product={item} />;
  };

  return (
    <>
      <Container>
        <FltList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item: { id: number }) => String(item.id)}
          numColumns={2}
        />
      </Container>
    </>
  );
};

export default Home;
