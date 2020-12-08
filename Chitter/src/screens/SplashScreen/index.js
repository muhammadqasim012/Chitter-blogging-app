import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
class SplashScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <Image
            square
            style={styles.logo}
            source={require('../../assests/splashScreen.png')}
          />
          <View>
            <Text style={styles.heading}>Welcome To Chitter</Text>
          </View>
          <View style={styles.container}>
            <ActivityIndicator
              color="#03599C"
              size={70}
              style={styles.activityIndicator}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    marginTop: -40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#03599C',
    textAlign: 'center',
  },
});

export default SplashScreen;

// Splash Screen when the app will open it will show first then app will render
