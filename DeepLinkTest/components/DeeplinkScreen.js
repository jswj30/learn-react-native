import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Linking } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const useMount = func => useEffect(() => func(), []);

const useInitialURL = () => {
  const [url, setUrl] = useState(null);
  const [processing, setProcessing] = useState(true);

  useMount(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();

      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  });

  return { url, processing };
};

const DeeplinkScreen = () => {
  const { uri: initialUrl, processing } = useInitialURL();
  const test = useInitialURL();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>딥링크 받기</Text>

      <TouchableOpacity onPress={() => console.log(test)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>URL</Text>
        </View>
      </TouchableOpacity>

      <Text>
        {processing ? `Processing the initial url from a deep link`
         : 
        `The deep link is : ${initialUrl || 'None'}`}
      </Text>
    </View>
  );
};

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  text: {
    fontSize: '30rem', 
    fontWeight: 'bold', 
  }, 
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
    textAlign : 'center', 
  }
})

export default DeeplinkScreen;