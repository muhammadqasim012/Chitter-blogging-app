import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {Text} from 'native-base';

class ActivityIndicatorExample extends Component {
  state = {animating: true};

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      60000,
    );

  componentDidMount = () => this.closeActivityIndicator();
  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#03599C"
          size={70}
          style={styles.activityIndicator}
        />

        <Text>Please wait....</Text>
      </View>
    );
  }
}
export default ActivityIndicatorExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

// Loader will show when we are fetching some kind of api and it will take time to load so we can use this and user will understand that data will take time to render
