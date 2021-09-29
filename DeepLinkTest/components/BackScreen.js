import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const BackScreen = ({ navigation }) => {

  const handleBack = () => {
    navigation.goBack();
  }

  const handleHome = () => {
    navigation.popToTop();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Back Screen</Text>
      <TouchableOpacity onPress={handleBack}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHome}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
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

export default BackScreen;