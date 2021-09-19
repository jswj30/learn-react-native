import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'; 

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Text style={styles.MainTitle}>Debug</Text>
      <View style={styles.MainArea}>
        <Text>sdsf</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1, 
    backgroundColor: '#F8E4A8', 
  }, 
  MainTitle: {
    fontSize: 50,
    textAlign: 'center', 
    marginTop: 50,
    color: '#222',   
  }, 
  MainArea: {
    backgroundColor: 'white',
    flex: 1, 
    marginTop: 20, 
    marginLeft: 20, 
    marginRight: 20, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingLeft: 20,   
    paddingRight: 20,   
  }
})

export default App;
