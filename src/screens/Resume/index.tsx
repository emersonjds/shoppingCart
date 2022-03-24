import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Box, Container } from '../../components/Spacing';
import { shoppingSelector } from '../../redux/slices/shoppingSlice';
import { Title } from './styles';

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
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: 70, height: 70 }}
              />
            </Box>
            <Box width={'50%'} alignItems={'center'}>
              <Title>{product.title}</Title>
            </Box>
            <Box width={'30%'} alignItems={'center'}>
              <Title>{product.quantity}</Title>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Resume;
