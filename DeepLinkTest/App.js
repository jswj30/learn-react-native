import React from 'react';
import { View, Text, Linking } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import BackScreen from './components/BackScreen';
import DeeplinkScreen from './components/DeeplinkScreen';

// const linking={{
//     prefixes: ['https://mychat.com', 'mychat://'],
//     config: {
//       screens: {
//         Chat: 'feed/:sort',
//       },
//     },
//   }}

const linking = {
  prefixes: ['https://deeplinktest.com', 'deeplinktest://'], 
  config: {
    screens: {
      Chat: 'feed/:sort', 
      Profile: 'user', 
    }
  }, 
};

const state = {
  routes: [
    {
      name: 'rooms', 
      state: {
        routes: [
          {
            name: 'chat', 
            params: { user: 'jane' }, 
          }
        ]
      }
    }
  ]
}

const App = () => {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer linking={linking} fallback={<Text>Loadeng...</Text>}>
      <Stack.Navigator 
        initialRouteName="Home"
      >
        <Stack.Screen name="Deeplink" component={DeeplinkScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Back" component={BackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;