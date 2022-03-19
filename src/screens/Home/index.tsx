import React, { useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BoxItem from '../../components/BoxItem';

// import { Container } from './styles';

const Home: React.FC = () => {

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
      }}>
        <ScrollView style={{
          height: '100%',
          width: '100%',
        }}
          horizontal={true}
        >
          {products.map(product => {
            return (
              <BoxItem key={product.id} product={product} />
            )
          })}

        </ScrollView>
      </View>
    </>
  );
}

export default Home;