import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Resume from '../screens/Resume';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Liven Shopping"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => <MCIcon name="menu" size={30} color="#000" />,
            headerRight: () => (
              <Icon name="shopping-cart" size={30} color="#000" />
            ),
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Resume" component={Resume} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
