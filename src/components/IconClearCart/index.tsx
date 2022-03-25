import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../redux/slices/shoppingSlice';
import { Box } from '../Spacing';

const IconClearCart: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(removeAllFromCart())}>
      <Box>
        <Icon name="trash" size={30} color="#000" />
      </Box>
    </TouchableOpacity>
  );
};

export default IconClearCart;
