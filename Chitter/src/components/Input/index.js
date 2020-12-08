import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

class Input extends React.Component {
  render() {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText, {borderColor: this.props.borderColor}]}
          placeholder={this.props.placeholder}
          placeholderTextColor="black"
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    width: '90%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderColor: '#03599C',
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
});

export default Input;

// Custom Input Component which will recive props whenever we will use this Input we will pass props

// 1   <Input  placeholder="Enter Your Name" onChangeText="()=>this.setState({name:text})" />
// remember one thing that props names always remains same but value can change
