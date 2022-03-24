import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import Colors from '../../contants';
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
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}
          onPress={() => navigation.navigate('Home')}>
          Continuar comprando
        </Text>
      </Box>
      <HorizontalDivider />
      <Box height={'20%'} width="100%">
        <TouchableOpacity
          style={{
            height: 52,
            width: '100%',
            backgroundColor: Colors.PRIMARY_COLOR,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Finalizar compra
          </Text>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default Resume;
