import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
    <View>
      <Text>test</Text>
    </View>
    </>
  );
};

export default App;