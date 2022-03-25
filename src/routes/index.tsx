import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Resume from '../screens/Resume';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCart from '../components/IconCart';

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
            headerRight: () => <IconCart />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Resume"
          component={Resume}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
