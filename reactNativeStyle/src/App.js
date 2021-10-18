import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Style</Text>
      <Text style={styles.error}>Inline Styling - Error</Text>
    </View>


    // <View
    //   style={{
    //     backgroundColor: '#fff', 
    //     alignItems: 'center', 
    //     justifyContent: 'center', 
    //   }}
    // >
    //   <Text
    //     style={{
    //       padding: 10, 
    //       fontSize: 26, 
    //       fontWeight: '600', 
    //       color: 'black', 
    //     }}
    //   >
    //     React Native Style
    //   </Text>
    //   <Text
    //     style={{
    //       padding: 10, 
    //       fontSize: 26, 
    //       fontWeight: '400', 
    //       color: 'red', 
    //     }}
    //   >
    //     Inline Styling - Error
    //   </Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flix: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  text: {
    padding: 10, 
    fontSize: 26, 
    fontWeight: '600', 
    color: 'black', 
  }, 
  error: {
    padding: 10, 
    fontSize: 26, 
    fontWeight: '400', 
    color: 'red', 
  }
})

export default App;