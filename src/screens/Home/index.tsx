import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import BoxItem from '../../components/BoxItem';

// import { Container } from './styles';

const Home: React.FC = () => {

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const renderItem = ({ item }) => {
    return (
      <BoxItem product={item} />
    )
  }


  return (
    <>
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'orange',

      }}>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          numColumns={2}
        />
      </View>
    </>
  );
}

export default Home;