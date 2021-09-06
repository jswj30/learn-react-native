import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Home extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 홈 화면 입니다.</Text>
      </View>
    );
  }
}

class Chat extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 챗 화면 입니다.</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text> 세팅 화면 입니다.</Text>
      </View>
    );
  }
}

const App = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    Home: {
      screen: Home,
    },
    Settings,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainger;

export default () => (
  <View style={styles.centerView}>
    <Home />
    <Chat />
    <Settings />
  </View>
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eachView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});