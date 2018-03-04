import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ xlabel, xvalue, xonChangeText, xplaceholder, xsecureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{xlabel}</Text>
      <TextInput
        secureTextEntry={xsecureTextEntry} // same as secureTextEntry={true} but ES lint will complain
        placeholder={xplaceholder}
        autoCorrect={false} //autoCorrect is a prop of TextInput from react-native
        style={inputStyle}
        value={xvalue} //value is a prop of TextInput from react-native
        onChangeText={xonChangeText} //onChangeText is a prop of TextInput from react-native
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
