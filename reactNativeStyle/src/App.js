import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from '../components/Layout';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>


    // <View style={viewStyles.container}>
    //   <Text style={[textStyles.text, { color: 'green' }]}>React Native Style</Text>
    //   <Text style={[textStyles.text, textStyles.error]}>Inline Styling - Error</Text>
    // </View>


    // <View style={styles.container}>
    //   <Text style={[styles.text, { color: 'green' }]}>React Native Style</Text>
    //   <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
    // </View>


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

// const styles = StyleSheet.create({
//   container: {
//     flix: 1, 
//     backgroundColor: '#fff', 
//     alignItems: 'center', 
//     justifyContent: 'center', 
//   }, 
//   text: {
//     padding: 10, 
//     fontSize: 26, 
//     fontWeight: '600', 
//     color: 'black', 
//   }, 
//   // error: {
//   //   padding: 10, 
//   //   fontSize: 26, 
//   //   fontWeight: '400', 
//   //   color: 'red', 
//   // },
//   error: {
//     fontWeight: '400', 
//     color: 'red', 
//   },  
// });

export default App;