import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 20,
        }}>
        <Text>Shopping</Text>
        <Home />
      </View>
    </SafeAreaView>
  </Provider>
);

export default App;