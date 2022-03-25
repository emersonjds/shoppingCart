import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../redux/slices/shoppingSlice';
import { Box } from '../Spacing';

const IconClearCart: React.FC = () => {
  const dispatch = useDispatch();

  const messageFromRemoveData = () => {
    Alert.alert(
      'Remover todos os itens do carrinho?',
      '',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => dispatch(removeAllFromCart()),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity onPress={() => messageFromRemoveData()}>
      <Box>
        <Icon name="trash" size={30} color="#000" />
      </Box>
    </TouchableOpacity>
  );
};

export default IconClearCart;
