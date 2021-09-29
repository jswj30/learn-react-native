import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Linking, { getInitialURL } from 'expo-linking';

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

  // Third-party integrations
  // const linking = {
  //   prefixed: ['myapp://', 'https://myapp.com'],
    
  //   async getInitialURL() {
  //     const url = await Linking.getInitialURL();
  //     if (url != null) {
  //       return url;
  //     }
  //     const params = branch.getFirstReferringParams();
  //     return params?.$canonical_url;
  //   }, 

  //   subscribe(listener) {
  //     const onReceiveURL = ({ url }: { url: string }) => listener(url);
  
  //     Linking.addEventListener('url', onReceiveURL);
  
  //     branch.subscribe(({ error, params, uri }) => {
  //       if (error) {
  //         console.error('Error from Branch: ' + error);
  //         return;
  //       }
  
  //       if (params['+non_branch_link']) {
  //         const nonBranchUrl = params['+non_branch_link'];
  //         return;
  //       }
  
  //       if (!params['+clicked_branch_link']) {
  //         return;
  //       }
  
  //       const url = params.$canonical_url;
  
  //       listener(url);
  //     });

  //     return () => {
  //       Linking.removeEventListener('url', onReceiveURL);
  //       branch.unsubscribe();
  //     };
  //   }, 
  
  //   config: {

  //   }
  // };

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