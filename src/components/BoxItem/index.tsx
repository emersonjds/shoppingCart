import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
interface Props {
  product: {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
  };
}

const BoxItem: React.FC<Props> = ({ product }) => {
  // const { id, category, title, image } = product;

  const navigation = useNavigation();

  return (
    <>
      {/* <View style={{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderColor: '#000',
        margin: 10,
      }}>
        <Text>
          Emerson
        </Text>
      </View> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { product })}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 150,
          height: 150,
          borderColor: '#000',
          borderWidth: 1,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
        }}
        
        >
        <Image
          source={{ uri: product.image }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlign: 'center',
          }}>
          Price: {product.price}
        </Text>
        <Text style={{
            textAlign: 'center',
          }}>
          {product.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BoxItem;
