import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const Details: React.FC = () => {
  const route = useRoute();

  const product = route.params.product;

  useEffect(() => {
    console.log(product);
  }, [])

  return <View />;
};

export default Details;
