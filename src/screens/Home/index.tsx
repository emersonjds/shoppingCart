import React, { useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

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
      <View>
        <ScrollView>
          {products.map(product => {
            console.log(product.image)
            return (
              <View key={product.id}>
                <Text>
                  Categoria: {product.category}
                </Text>
                <Text>
                  Nome: {product.title}
                </Text>
                <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
              </View>
            )
          })}

        </ScrollView>
      </View>
    </>
  );
}

export default Home;