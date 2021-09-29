import React, { useCallback } from 'react';
import { View, Text, Alert, Linking, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// 클릭하면 링크된 앱 열기
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  button: {
    backgroundColor: '#A13647', 
    borderRadius: '10rem', 
    width: '100rem', 
    height: '40rem', 
    marginTop: '20rem', 
  }, 
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    paddingTop: '3rem', 
    textAlign: 'center', 
  }
})

export default OpenURLButton;