import styled from 'styled-components/native';
import Colors from '../../contants';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const TopContainer = styled.View`
  height: 80%;
  width: 100%;
  align-items: center;
`;

export const BottomContainer = styled.View`
  height: 20%;
  width: 100%;
  padding: 20px;
  align-items: center;
`;

export const ContainerProductDetails = styled.View`
  // flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TitleProduct = styled.Text`
  color: ${Colors.SECONDARY_TEXT_COLOR};
  font-size: 18px;
  text-align: center;
`;

export const TitlePrice = styled.Text`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 18px;
`;

export const TitleDescription = styled.Text`
  color: ${Colors.SECONDARY_TEXT_COLOR};
`;

export const ButtonPay = styled.TouchableOpacity`
  height: 52px;
  width: 50%;
  background-color: ${Colors.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const TextButtonPay = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.PRIMARY_BACKGROUND_COLOR};
`;

export const QuantityButton = styled.TouchableOpacity`
  color: ${Colors.PRIMARY_TEXT_COLOR};
  font-size: 20px;
  background-color: ${Colors.PRIMARY_BUTTON_COLOR};
  padding: 10px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export const QuantityText = styled.Text`
  color: ${Colors.PRIMARY_TEXT_COLOR};
  font-size: 18px;
`;

export const TextQuantityButton = styled.Text`
  color: ${Colors.PRIMARY_TEXT_COLOR};
  font-size: 16px;
`;
