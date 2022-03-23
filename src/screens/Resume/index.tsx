import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { shoppingSelector } from '../../redux/slices/shoppingSlice';

// import { Container } from './styles';

const Resume: React.FC = () => {
  const { cart } = useSelector(shoppingSelector);

  useEffect(() => {
    console.log('DADOS', cart);
  }, []);

  return <View testID="Resume" />;
};

export default Resume;
