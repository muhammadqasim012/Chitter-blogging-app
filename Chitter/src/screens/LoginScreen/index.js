import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Input, CustomButton} from '../../components';
import {connect} from 'react-redux';
import {AllAction} from '../../store/action/index';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };
  storeUser_id = async user_id => {
    try {
      await AsyncStorage.setItem('user_id', JSON.stringify(user_id));
    } catch (e) {
      console.log('errSaving local user_id', e);
    }
  };

  store_Token = async token => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log('errSaving local token', e);
    }
  };
  token = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
      }
    } catch (e) {
      // error reading value
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      alert('Server Error Or Wrong Email and Password');
      this.props.AllListsNull();
    }
    if (nextProps.LoginRes) {
      this.setState({loding: false});
      this.storeUser_id(nextProps.LoginRes.id);
      this.store_Token(nextProps.LoginRes.token);

      let payload = {
        token: nextProps.LoginRes.token,
      };
      this.props.getChitList(payload);
      this.props.navigation.navigate('Main');
      this.props.AllListsNull();
    }
  }
  Log = () => {
    let payload = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log('payload', payload);
    this.setState({loding: true});
    this.props.Login(payload);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Blog App</Text>
        {this.state.loding === true ? (
          <ActivityIndicator size="large" color="#fb5b5a" />
        ) : null}
        <Input
          placeholder="Enter Your Email"
          onChangeText={text =>
            this.setState({
              email: text,
            })
          }
        />
        <Input
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={text =>
            this.setState({
              password: text,
            })
          }
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          name="Login"
          // onPress={() => this.props.navigation.navigate("Main")}
          onPress={() => this.Log()}
        />
        <CustomButton
          name="SIGNUP"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#03599C',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 14,
    marginLeft: 180,
  },
});
const mapStateToProps = state => {
  return {
    LoginRes: state.AllActionReducer.LoginRes,
    error: state.AllActionReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: payload => dispatch(AllAction.Login(payload)),
    AllListsNull: () => dispatch(AllAction.AllListsNull()),
    getChitList: payload => dispatch(AllAction.getChitList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
