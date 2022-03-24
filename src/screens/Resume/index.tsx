import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import {
  addQuantityOfItem,
  removeQuantityOfItem,
  shoppingSelector,
} from '../../redux/slices/shoppingSlice';
import { ButtonQuantity, ButtonQuantityText, Title } from './styles';

const Resume: React.FC = () => {
  const { cart } = useSelector(shoppingSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const totalValue = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    console.log('TOTAL', total);
    return total;
  };

  return (
    <Container>
      <Box height={'80%'} width="100%">
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
                  resizeMode="contain"
                />
              </Box>
              <Box width={'50%'} alignItems={'center'}>
                <Title>{product.title}</Title>
              </Box>
              <Box
                width={'30%'}
                alignItems={'center'}
                flexDirection="row"
                justifyContent="space-evenly">
                <ButtonQuantity
                  onPress={() => dispatch(removeQuantityOfItem(product))}>
                  <ButtonQuantityText>-</ButtonQuantityText>
                </ButtonQuantity>
                <Title>{product.quantity}</Title>
                <ButtonQuantity
                  onPress={() => dispatch(addQuantityOfItem(product))}>
                  <ButtonQuantityText>+</ButtonQuantityText>
                </ButtonQuantity>
              </Box>
            </Box>
          ))}
        </ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ea4c89',
          }}
          onPress={() => navigation.navigate('Home')}>
          Continuar comprando
        </Text>
      </Box>

      <Box
        height={'20%'}
        width="100%"
        alignItems={'center'}
        justifyContent="center">
        <HorizontalDivider />
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000' }}>
            R$ Valor total: {totalValue()}
          </Text>
        </Text>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 52,
            width: '100%',
            backgroundColor: '#ea4c89',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Finalizar compra
          </Text>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default Resume;
