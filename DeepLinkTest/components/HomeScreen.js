import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HomeScreen = ({ navigation }) => {

  const [value, setValue] = useState("");

  const handleDeepLink = () => {
    alert('DeepLink');
  }

  const handleDetails = () => {
    navigation.navigate('Details');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.text}>DeepLink Test</Text>
      <TouchableOpacity onPress={handleDeepLink}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>딥링크</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDetails}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Detail</Text>
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

export default HomeScreen;