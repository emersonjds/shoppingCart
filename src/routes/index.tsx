import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Resume from '../screens/Resume';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // headerShown: false,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
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
