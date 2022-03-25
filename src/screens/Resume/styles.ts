import { Text } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../contants';

export const Title = styled.Text`
  color: ${Colors.PRIMARY_TEXT_COLOR};
`;

export const ButtonQuantity = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  border-radius: 20px;
  background-color: ${Colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
`;

export const ButtonQuantityText = styled.Text`
  color: ${Colors.SECONDARY_BACKGROUND_COLOR};
  font-size: 14px;
`;

export const TextNavigate = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.PRIMARY_COLOR};
`;

export const TextTotal = styled.Text`
  font-size: 16px;
  color: ${Colors.PRIMARY_TEXT_COLOR};
  font-weight: bold;
`;

export const TextValue = styled.Text`
  font-size: 25px;
  font-wereight: bold;
  color: ${Colors.PRIMARY_COLOR};
`;

export const ButtonFinalizePurchase = styled.Text`
  height: 52px;
  width: 80%;
  background-color: ${Colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const TextButtonPurchase = styled.Text`
  color: ${Colors.SECONDARY_BACKGROUND_COLOR};
  font-size: 20px;
  font-weight: bold;
`;
