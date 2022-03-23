import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BoxItem from '../../components/BoxItem';
import { shoppingSelector } from '../../redux/slices/shoppingSlice';
import { Container, FltList } from './style';

const Home: React.FC = () => {
  const [products, setProducts] = React.useState([]);

  const shopSelector = useSelector(shoppingSelector);

  useEffect(() => {
    console.log(shopSelector);
  }, [shopSelector]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(data => {
      // console.log(data)})
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
