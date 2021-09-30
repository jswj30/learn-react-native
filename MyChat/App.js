import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import ProfileScreen from './components/ProfileScreen';

const App = () => {

  // /rooms/chat?user=jane 예시
  // const state = {
  //   routes: [
  //     {
  //       name: 'rooms', 
  //       state: {
  //         routes: [
  //           {
  //             name: 'chat', 
  //             params: { user: 'jane' }, 
  //           }
  //         ]
  //       }
  //     }
  //   ]
  // }

  // /feed/latest
  const state = {
    routes: [
      {
        name: 'Chat', 
        params: {
          sort: 'latest', 
        },
      }, 
    ], 
  }

  // Chat Screen의 url은 feed/:sort
  const config = {
    screens: {
      Chat: 'feed/:sort', 
      Profile: 'user', 
    }, 
  };

  const linking = {
    prefixes: ['https://mychat.com', 'mychat://'], 
    config, 
  };
  
  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;