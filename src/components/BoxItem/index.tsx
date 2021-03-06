import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { BoxItemProps } from './Model';
import { ItemBox, ItemBoxPrice, ItemBoxText } from './styles';

const BoxItem: React.FC<BoxItemProps> = ({ product }) => {
  const navigation = useNavigation();

  return (
    <>
      <ItemBox
        onPress={() => navigation.navigate('Details', { product })}
        testID={'item'}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <ItemBoxText numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </ItemBoxText>
        <ItemBoxPrice>R$ {product.price}</ItemBoxPrice>
      </ItemBox>
    </>
  );
};

export default BoxItem;
