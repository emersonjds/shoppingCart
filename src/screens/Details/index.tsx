import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import { Box, Container } from '../../components/Spacing';
import { addToCart } from '../../redux/slices/shoppingSlice';

import {
  BottomContainer,
  ButtonPay,
  ContainerProductDetails,
  TextButtonPay,
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
        {/* TODO: add styles for this container */}
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
            starContainerStyle={{
              marginTop: -30,
            }}
          />
        </Box>
        <Box mt={20} paddingLeft={20} paddingRight={20}>
          <TitleDescription>{product.description}</TitleDescription>
        </Box>
      </TopContainer>
      <BottomContainer>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            backgroundColor: 'orange',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => removeQuantity()}>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
            }}>
            Quantidade: {quantity}
          </Text>
          <TouchableOpacity onPress={() => addQuantity()}>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
              }}>
              +
            </Text>
          </TouchableOpacity>
          <ButtonPay onPress={() => addProductToCart()}>
            <TextButtonPay>Buy Now</TextButtonPay>
          </ButtonPay>
        </View>
      </BottomContainer>
    </Container>
  );
};

export default Details;
