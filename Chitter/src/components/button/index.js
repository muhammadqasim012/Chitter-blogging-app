import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.Btn}
        activeOpacity={0.7}
        onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Btn: {
    width: '80%',
    backgroundColor: '#03599C',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
