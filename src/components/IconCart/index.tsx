import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Box } from '../Spacing';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { shoppingSelector } from '../../redux/slices/shoppingSlice';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../contants';

const IconCart: React.FC = () => {
  const { cart } = useSelector(shoppingSelector);
  const navigation = useNavigation();

  const itemsOnCart = cart.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );

  const navigationToResume = () => {
    if (itemsOnCart > 0) {
      return navigation.navigate('Resume');
    }
    return null;
  };

  return (
    <TouchableOpacity onPress={navigationToResume}>
      <Box
        height={20}
        width={20}
        bg={Colors.PRIMARY_COLOR}
        style={{
          position: 'absolute',
          zIndex: 1,
          right: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          {itemsOnCart}
        </Text>
      </Box>
      <Icon name="shopping-cart" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default IconCart;
