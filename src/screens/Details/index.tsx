import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import { Box, Container, HorizontalDivider } from '../../components/Spacing';
import { addToCart } from '../../redux/slices/shoppingSlice';

import {
  BottomContainer,
  ButtonPay,
  ContainerProductDetails,
  QuantityButton,
  QuantityText,
  TextButtonPay,
  TextQuantityButton,
  TitleDescription,
  TitlePrice,
  TitleProduct,
  TopContainer,
} from './styles';

const Details: React.FC = () => {
  const route = useRoute();

  const product = route.params.product;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation();

  const addProductToCart = () => {
    const productCart = {
      ...product,
      quantity,
    };

    dispatch(addToCart(productCart));
    navigation.navigate('Resume');
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <Container>
      <TopContainer>
        <Image
          source={{ uri: product.image }}
          style={{
            height: '50%',
            width: '100%',
            marginTop: 20,
          }}
          resizeMode="contain"
        />
        <ContainerProductDetails>
          <Box width={'70%'}>
            <TitleProduct>{product.title}</TitleProduct>
          </Box>
          <Box width={'30%'}>
            <TitlePrice>R$ {product.price}</TitlePrice>
          </Box>
        </ContainerProductDetails>

        <Box>
          <AirbnbRating
            count={5}
            defaultRating={product.rating.rate}
            size={20}
            // eslint-disable-next-line react-native/no-inline-styles
            starContainerStyle={{
              marginTop: -30,
            }}
          />
        </Box>
        <Box mt={20} paddingLeft={20} paddingRight={20}>
          <TitleDescription>{product.description}</TitleDescription>
        </Box>
      </TopContainer>
      <HorizontalDivider />
      <BottomContainer>
        <Box
          width={'100%'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <QuantityButton onPress={() => removeQuantity()}>
            <TextQuantityButton>-</TextQuantityButton>
          </QuantityButton>
          <QuantityText>{quantity}</QuantityText>
          <QuantityButton onPress={() => addQuantity()}>
            <TextQuantityButton>+</TextQuantityButton>
          </QuantityButton>
          <ButtonPay onPress={() => addProductToCart()}>
            <TextButtonPay>Buy Now</TextButtonPay>
          </ButtonPay>
        </Box>
      </BottomContainer>
    </Container>
  );
};

export default Details;
