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
  const { id, category, title, image } = product;
  return (
    <>
      <View key={id}>
        <Text>
          Categoria: {category}
        </Text>
        <Text>
          Nome: {title}
        </Text>
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      </View>
    </>
  );
}

export default BoxItem;