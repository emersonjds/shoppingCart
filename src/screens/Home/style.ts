import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: orange;
`;

export const FltList = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;
