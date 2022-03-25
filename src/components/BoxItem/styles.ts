import styled from 'styled-components/native';

export const ItemBox = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  borderColor: '#000; 
  border-width: 1px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const ItemBoxText = styled.Text`
  margin-top: 12px;
  color: #000;
  text-align: center;
`;

export const ItemBoxPrice = styled.Text`
  color: #000;
  text-align: center;
  margin-top: 5px;
`;
