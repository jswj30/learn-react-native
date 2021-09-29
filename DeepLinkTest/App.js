import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Linking from 'expo-linking';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import BackScreen from './components/BackScreen';

// expo
// const prefix = Linking.createURL('/');

const App = () => {

  // expo
  // const linking = {
  //   prefixes: [prefix], 
  // }

  const Stack = createNativeStackNavigator();

  return(
    // expo
    // <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Back" component={BackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;