// 함수형
import React, { useState, useEffect } from 'react';
// Animated 모듈 가져오기
import { StyleSheet, View, Animated, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   Animated.timing(
  //     animation, 
  //     {
  //       toValue: 0, 
  //       duration: 2000, 
  //       useNativeDriver: true, 
  //     }
  //   ).start();
  // }, []);

  const onPressButton = () => {
    console.log(animation);
    Animated.timing(
      animation, 
      {
        toValue: 1, 
        duration: 2000, 
        useNativeDriver: true, 
      }
    ).start();
    setTimeout(() => {
      Animated.timing(
        animation, 
        {
          toValue: 0, 
          duration: 2000, 
          useNativeDriver: true, 
        }
      ).start();
    }, 3000);

  }

  const animationStyles = {
    opacity: animation, 
  }

  return (
    <View>
      <TouchableOpacity onPress={onPressButton}>
        <Text>테스트</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.object, animationStyles]}>
      </Animated.View>
    </View>
      
  )
}

const styles = StyleSheet.create({
  object: {
    backgroundColor: 'orange', 
    width: 100, 
    height: 100, 
  }
})

export default App;





// class형
// import React, { Component } from 'react';
// // Animated 모듈 가져오기
// import { View, Animated } from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // Animated 초기값 지정
//       animation: new Animated.Value(1), 
//     }
//   }

//   componentDidMount() {
//     Animated.timing(
//       this.state.animation, 
//       {
//         toValue: 0, 
//         duration: 2000, 
//       }
//     ).start();
//   }
  
  

//   render() {
//     const animationStyles = {
//       opacity: this.state.animation, 
//     }

//     return (
//       <Animated.View style={[objectStyles.object, animationStyles]}>
//       </Animated.View>
//     );
//   }
// }

// const objectStyles = {
//   object: {
//     backgroundColor: 'orange', 
//     width: 100, 
//     height: 100, 
//   }
// }

// export default App;