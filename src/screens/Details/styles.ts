import styled from 'styled-components/native';

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
  justify-content: center;
`;

export const ContainerProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TitleProduct = styled.Text`
  color: #333;
  font-size: 18px;
  text-align: center;
`;

export const TitlePrice = styled.Text`
  color: #ea4c89;
  font-size: 18px;
`;

export const ButtonPay = styled.TouchableOpacity`
  height: 52px;
  width: 50%;
  background-color: #ea4c89;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const TextButtonPay = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
