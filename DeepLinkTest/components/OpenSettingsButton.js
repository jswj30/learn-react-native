import React, { useCallback } from 'react';
import { TouchableOpacity, View, Text, Linking, Dimensions }  from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// 클릭하면 앱설정으로 이동
const OpenSettingsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    await Linking.openSettings();
  }, []);

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
      paddingTop: '10rem', 
      textAlign: 'center', 
    }
})  

export default OpenSettingsButton;