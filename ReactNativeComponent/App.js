import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1, 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
    >

      <EventButton />

      {/* <Counter /> */}

      {/* <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
        
      <MyButton title="Button" onPress={() => alert('props')} />
      <MyButton title="Button" onPress={() => alert('children')}>Children Props</MyButton>
      <MyButton onPress={() => alert('default')} /> */}

      {/* <MyButton title="Button" />
      <MyButton title="Button">Children Props</MyButton>
      <MyButton /> */}

      {/* const test = () => {
        alert('test');
      } */}

        {/* <Button title="Press Here" style={styles.button} onPress={() => alert('test')} /> */}
        
      {/* <TouchableOpacity
        style={styles.button}
        onPress={test}
      >
        <Text>Press Here</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default App;

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1, 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         backgroundColor: '#fff', 
//       }}
//     >
//       <Text>Open up App.js. js to start working on your app!</Text>
//     </View>
//   );
// }

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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
