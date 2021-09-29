import React, { useState, useEffect } from 'react';
import { View, Text, Linking, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const useMount = func => useEffect(() => {
  func()
}, []);

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
  })

  return { url, processing };
};

export default useInitialURL;
