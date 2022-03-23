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
      .then(data => setProducts(data));
    // .then(data => {
    // console.log(data)})
  }, []);

  const dataProduct = [
    {
      id: 1,
      name: 'Product 1',
      price: 'R$ 10,00',
      image:
        'https://www.iplace.com.br/ccstore/v1/images/?source=/file/v5758673239502908668/products/216001.00-iphone-11-apple-preto-mhdh3br-a.jpg&height=1000&width=1000&quality=0.9',
    },
  ];

  const renderItem = ({ item }) => {
    return <BoxItem product={item} />;
  };

  return (
    <>
      <SafeAreaView>
        <Container>
          <FltList
            data={dataProduct}
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
