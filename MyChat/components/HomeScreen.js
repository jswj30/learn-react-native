import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

function HomeScreen({ navigation }) {

  const handleChat = () => {
    // navigation.navigate('Chat');
    let test = Linking.getInitialURL();
    console.log(`test--------------------------`);
    console.log(test);
  }

  const handleProfile = () => {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Home Screen</Text>

      <TouchableOpacity onPress={handleChat}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Chat</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfile}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
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