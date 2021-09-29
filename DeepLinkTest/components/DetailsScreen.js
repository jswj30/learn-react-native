import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  )
}

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }
})

export default DetailsScreen;