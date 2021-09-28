import React, { useState, useEffect, useFocusEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
  const [value, setValue] = useState("");

  const handleDeepLink = () => {
    alert('DeepLink');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>DeepLink Test</Text>
      <TouchableOpacity onPress={handleDeepLink}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>딥링크</Text>
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

export default App;