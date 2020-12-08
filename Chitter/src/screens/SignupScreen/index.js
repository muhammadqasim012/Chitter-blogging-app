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
import * as EmailValidator from 'email-validator';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      family_name: 'family_name',
      loding: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      alert('Err');
      this.props.AllListsNull();
    }
    if (nextProps.SignUpRes) {
      // console.log('nextProps.SignUpRes', nextProps.SignUpRes);
      alert('Account Created Successfully, Press Ok to go to login Page');
      this.navigation();
      this.props.AllListsNull();
    }
  }
  navigation = () => {
    this.props.navigation.navigate('Login');
  };
  SignUp = () => {
    let payload = {
      given_name: this.state.name,
      family_name: this.state.family_name,
      email: this.state.email,
      password: this.state.password,
    };
    if (EmailValidator.validate(this.state.email)) {
      this.props.SignUp(payload);
      this.setState({loding: true});
    } else {
      alert('Plaese input Correcr Email Address');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Blog App</Text>
        {this.state.loding === true ? (
          <ActivityIndicator size="large" color="#fb5b5a" />
        ) : null}
        <Input
          placeholder="Enter Your Name"
          onChangeText={text =>
            this.setState({
              name: text,
            })
          }
        />
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

        <CustomButton name="SIGNUP" onPress={() => this.SignUp()} />
        <CustomButton
          name="Login"
          onPress={() => this.props.navigation.navigate('Login')}
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
    SignUpRes: state.AllActionReducer.SignUpRes,
    error: state.AllActionReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SignUp: payload => dispatch(AllAction.SignUp(payload)),
    AllListsNull: () => dispatch(AllAction.AllListsNull()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
