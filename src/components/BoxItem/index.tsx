import React from 'react';
import { Image, Text, View } from 'react-native';
interface Props {
  product: {
    id: number;
    title: string;
    image: string;
    category: string;
  }
}

const BoxItem: React.FC<Props> = ({ product }) => {
  // const { id, category, title, image } = product;
  return (
    <>

      <View style={{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderColor: '#000',
        marginBottom: 10,
        marginRight: 10,
      }}>
        <Text>
          Emerson
        </Text>
      </View>

      {/* <View style={{
        height: 100,
        width: 100,
      }}>
        <Text>
          Categoria: {product.category}
        </Text>
        <Text>
          Nome: {product.title}
        </Text>
        <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      </View> */}
    </>
  );
}

export default BoxItem;