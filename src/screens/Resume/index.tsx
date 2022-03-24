import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Box, Container } from '../../components/Spacing';
import { shoppingSelector } from '../../redux/slices/shoppingSlice';

const Resume: React.FC = () => {
  const { cart } = useSelector(shoppingSelector);

  return (
    <Container>
      <ScrollView>
        {cart.map(product => (
          <Box
            height={100}
            width={'100%'}
            p={10}
            flexDirection="row"
            alignItems={'center'}>
            <Box width={'20%'}>
              <Image
                source={{ uri: product.image }}
                style={{ width: 70, height: 70 }}
              />
            </Box>
            <Box width={'50%'} alignItems={'center'}>
              <Text
                style={{
                  color: '#000',
                }}>
                {product.title}
              </Text>
            </Box>
            <Box width={'30%'} alignItems={'center'}>
              <Text
                style={{
                  color: '#000',
                }}>
                {product.quantity}
              </Text>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Resume;
