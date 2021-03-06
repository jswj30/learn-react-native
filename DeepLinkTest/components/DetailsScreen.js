import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BackScreen from './BackScreen';

const DetailsScreen = ({ navigation }) => {
  const handleDetails = () => {
    navigation.navigate('Home');
  }

  const handleBackSceen = () => {
    navigation.navigate('Back');
  }

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <TouchableOpacity onPress={handleDetails}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackSceen}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>BackScreen</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBack}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
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

export default DetailsScreen;