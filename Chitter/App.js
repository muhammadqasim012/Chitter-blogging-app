/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AppNavigation from './src/config/Navigation/index';
import {Splash} from './src/screens';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({isReady: true});
    }, 2000);
  }
  render() {
    if (!this.state.isReady) {
      return <Splash />;
    }
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
    // return <AppNavigation />;
  }
}

export default App;
