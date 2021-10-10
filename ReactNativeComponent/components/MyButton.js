import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types'; 

const MyButton = (props) => {
  console.log(props);
  return (
    <TouchableOpacity style={{
        backgroundColor: '#3498db', 
        padding: 16, 
        margin: 10, 
        borderRadius: 8, 
      }}
      onPress={() => alert('Click !!!')}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>{props.children || props.title}</Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'Button', 
}

MyButton.propTypes = {
  title: propTypes.number, 
};

export default MyButton;