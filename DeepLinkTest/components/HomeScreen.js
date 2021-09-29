import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import OpenURLButton from './OpenURLButton';
import OpenSettingsButton from './OpenSettingsButton';

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";


const HomeScreen = ({ navigation }) => {
  

  const handleDeepLink = () => {
    navigation.navigate('Deeplink');
  }

  const handleDetails = () => {
    navigation.navigate('Details');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.text}>DeepLink Test</Text>
      
      <TouchableOpacity onPress={handleDeepLink}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>딥링크받기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDetails}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Detail</Text>
        </View>
      </TouchableOpacity>

      <OpenURLButton url={supportedURL}>Open supported URL</OpenURLButton>

      <OpenURLButton url={unsupportedURL}>Open unsupported</OpenURLButton>

      <OpenSettingsButton>Open Setting</OpenSettingsButton>

    </View>

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
    textAlign : 'center', 
  }
})

export default HomeScreen;