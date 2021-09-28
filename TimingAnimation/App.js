import React, { Component } from 'react';
// Animated 모듈 가져오기
import { View, Animated } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Animated 초기값 지정
      animation: new Animated.Value(1), 
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation, 
      {
        toValue: 0, 
        duration: 2000, 
      }
    ).start();
  }
  
  

  render() {
    const animationStyles = {
      opacity: this.state.animation, 
    }

    return (
      <Animated.View style={[objectStyles.object, animationStyles]}>
      </Animated.View>
    );
  }
}

const objectStyles = {
  object: {
    backgroundColor: 'orange', 
    width: 100, 
    height: 100, 
  }
}

export default App;