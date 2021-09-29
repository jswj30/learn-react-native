import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const App = () => {
  const [value, setValue] = useState("");

  const handleDeepLink = () => {
    alert('DeepLink');
  }

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <View style={styles.container}>
    //     <Text style={styles.text}>DeepLink Test</Text>
    //     <TouchableOpacity onPress={handleDeepLink}>
    //       <View style={styles.button}>
    //         <Text style={styles.buttonText}>딥링크</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </NavigationContainer>
  )
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  text: {
    fontSize: '30rem', 
    fontWeight: 'bold', 
  }, 
  button: {
    backgroundColor: '#A13647', 
    borderRadius: '10rem', 
    width: '100rem', 
    height: '40rem', 
    marginTop: '20rem', 
  }, 
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    paddingTop: '10rem', 
  }
})

export default App;