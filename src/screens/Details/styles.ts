import styled from 'styled-components/native';

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
