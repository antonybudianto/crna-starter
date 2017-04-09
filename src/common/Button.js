import React from 'react';
import {
  TouchableHighlight,
  Text
} from 'react-native';

const Button = ({title, onPress, style, disabled}) => (
  <TouchableHighlight disabled={disabled} underlayColor="deepskyblue" style={[{
    backgroundColor: disabled ? 'lightgray' : 'skyblue',
    padding: 15,
    margin: 5,
    borderRadius: 5
  }, style]} onPress={onPress}>
    <Text style={{
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
    }}>{title}</Text>
  </TouchableHighlight>
);

export default Button;
