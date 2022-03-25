import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import {
  addQuantityOfItem,
  removeQuantityOfItem,
  shoppingSelector,
} from '../../redux/slices/shoppingSlice';
import {
  ButtonFinalizePurchase,
  ButtonQuantity,
  ButtonQuantityText,
  TextButtonPurchase,
  TextNavigate,
  TextTotal,
  TextValue,
  Title,
} from './styles';

const Resume: React.FC = () => {
  const { cart } = useSelector(shoppingSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const totalValue = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total.toFixed(2);
  };

  const navigateToHome = () => {
    navigation.navigate('Liven Shopping');
  };

  return (
    <Container>
      <Box height={'70%'} width="100%">
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
        <TextNavigate onPress={() => navigateToHome()}>
          {cart.length > 0 ? 'Continuar comprando' : 'Voltar para o início'}
        </TextNavigate>
      </Box>

      <Box
        height={'30%'}
        width="100%"
        alignItems={'center'}
        justifyContent="center">
        <HorizontalDivider />
        <Box flexDirection="row" alignItems="center">
          <TextTotal>Total:</TextTotal>
          <TextValue> R$ {totalValue()}</TextValue>
        </Box>
        <HorizontalDivider />
        <ButtonFinalizePurchase>
          <TextButtonPurchase>Finalizar compra</TextButtonPurchase>
        </ButtonFinalizePurchase>
      </Box>
    </Container>
  );
};

export default Resume;
