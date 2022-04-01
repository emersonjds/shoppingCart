import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BoxItem from '../../components/BoxItem';
import { Container, FltList } from './style';

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const renderItem = ({ item }) => {
    return <BoxItem product={item} />;
  };

  return (
    <>
      <SafeAreaView>
        <Container>
          <FltList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item: { id: number }) => String(item.id)}
            numColumns={2}
          />
        </Container>
      </SafeAreaView>
    </>
  );
};

export default Home;
