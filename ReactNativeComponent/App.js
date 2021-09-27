import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
      }}
    >
      <Text>Open up App.js. js to start working on your app!</Text>
    </View>
  );
}

// export default function App() {
//   // return null;
//   // return undefined;
  
//   const name = 'Beomjun';
//   return (
//     <View style={styles.container}>
//       {name === 'Beomjun' && (
//         <Text style={styles.text}>My name is Beomjun</Text>
//       )}
//       {name !== 'Beomjun' && (
//         <Text style={styles.text}>My name is not Beomjun</Text>
//       )}
//       {/* <Text style={styles.text}>
//         My name is {name === 'Beomjun' ? "Beomjun Kim" : 'React Native'}
//       </Text> */}
//       {/* <Text style={styles.text}>
//         My name is {name === 'Beomjun' ? "Beomjun Kim" : 'React Native'}
//       </Text> */}
//       {/* <Text style={styles.text}>
//         {
//           (() => {
//             if (name === 'Hanbit') return 'My name is Hanbit';
//             else if(name === 'Beomjun') return "My name is Beomjun";
//             else return "My name is React Native";
//           })()
//         }
//       </Text> */}
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  text: {
    fontSize: 30, 
  }, 
});