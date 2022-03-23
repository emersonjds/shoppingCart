import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Container } from '../Home/style';
import { BottomContainer, ButtonPay, TopContainer } from './styles';

const Details: React.FC = () => {
  const route = useRoute();

  const product = route.params.product;

  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <Container>
      <TopContainer />
      <BottomContainer>
        <ButtonPay>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Comprar
          </Text>
        </ButtonPay>
      </BottomContainer>
    </Container>
  );
};

export default Details;
