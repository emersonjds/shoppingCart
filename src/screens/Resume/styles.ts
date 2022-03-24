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
