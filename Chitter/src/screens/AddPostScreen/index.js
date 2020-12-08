import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import {Textarea} from 'native-base';
import RNLocation from 'react-native-location';
import Geocoder from 'react-native-geocoding';
import {Input, CustomButton} from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {AllAction} from '../../store/action/index';
import AsyncStorage from '@react-native-community/async-storage';
import ImgToBase64 from 'react-native-image-base64';

let newToken = '';
let user_id = '';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      avatar: null,
      location: {
        longitude: 0,
        latitude: 0,
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      console.log('Err', nextProps.error);
      this.props.AllListsNull();
    }
    if (nextProps.PostChitRes) {
      let payload = {
        token: newToken,
      };
      this.props.getChitList(payload);

      this.props.AllListsNull();
    }
  }
  findLocation = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            console.log('locations ', locations);
            this.setState({
              latitude: locations[0].latitude,
              longitude: locations[0].longitude,
            });

            /* Example location returned
            {
              speed: -1,
              longitude: -0.1337,
              latitude: 51.50998,
              accuracy: 5,
              heading: -1,
              altitude: 0,
              altitudeAccuracy: -1
              floor: 0
              timestamp: 1446007304457.029,
              fromMockProvider: false
            }
            */
          },
        );
      }
    });
  };
  token = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        newToken = value;
      }
    } catch (e) {
      // error reading value
    }
  };
  userId = async () => {
    try {
      const value = await AsyncStorage.getItem('user_id');
      if (value !== null) {
        user_id = value;
      }
    } catch (e) {
      // error reading value
    }
  };
  componentWillMount() {
    this.token();
    this.userId();
    this.findLocation();
  }

  // function which will switch to camera mode
  handelPickAvatar = async () => {
    this.setState({
      showCamera: true,
    });
  };
  uploadSuccess = x => {
    let payload = {
      token: newToken,
      newPayload: {
        photo_path: x,
        chit_id: 10,
      },
    };
    this.props.PostPhoto(payload);
  };
  uploadPhoto = path => {
    ImgToBase64.getBase64String(path)
      .then(x => this.uploadSuccess(x))
      .catch(err => console.log('errBase64', err));
  };
  tokenCheck = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log('images', images);
      this.uploadPhoto(images[0].path);
      this.setState({
        avatar: images[0].path,
      });
    });
  };
  // it will get image uri from camera component
  getResponse = photo => {
    this.setState({
      showCamera: false,
      avatar: photo,
    });
  };

  // handelsubmit function for form

  handleSignup = () => {
    // this.props.navigation.navigate('Home');
  };
  PostChit = () => {
    let payload = {
      token: newToken,
      newPayload: {
        chit_id: 0,
        timestamp: new Date().getTime(),
        chit_content: this.state.description,
        location: {
          longitude: this.state.longitude,
          latitude: this.state.latitude,
        },
        user: {
          user_id: Number(user_id),
          given_name: 'Qasim',
          family_name: 'string',
          email: 'Testing@ali.com',
        },
      },
    };

    this.props.PostChit(payload);
  };
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.profile}>{`Add New Note`}</Text>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.avatarPlaceholder}
                  onPress={this.tokenCheck}>
                  {this.state.avatar ? (
                    <Image
                      source={{uri: this.state.avatar}}
                      style={styles.avatar}></Image>
                  ) : null}
                  <MaterialIcons
                    name="edit"
                    size={15}
                    color="white"
                    style={styles.editIcon}></MaterialIcons>
                </TouchableOpacity>
              </View>

              <View style={styles.form}>
                <Text style={styles.errMessage}>{this.state.errMessage}</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={[
                      styles.inputText,
                      {borderColor: this.props.borderColor},
                    ]}
                    placeholder="Enter Title"
                    placeholderTextColor="black"
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={[
                      styles.inputText,
                      {borderColor: this.props.borderColor},
                    ]}
                    placeholder="Enter Categorie"
                    placeholderTextColor="black"
                  />
                </View>
                <Textarea
                  style={{
                    borderColor: '#003f5c',
                    marginBottom: 10,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}
                  rowSpan={5}
                  bordered
                  value={this.state.description}
                  placeholder="Enter Description"
                  onChangeText={text => this.setState({description: text})}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <CustomButton name="Add Blog" onPress={this.PostChit} />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  profile: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  editIcon: {
    marginTop: 100,
    marginLeft: 90,
    backgroundColor: '#03599C',
    borderRadius: 100,
    padding: 5,
  },
  form: {
    marginHorizontal: 30,
  },
  avatarPlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: '#E1E2E6',
    borderRadius: 100,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  errMessage: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  inputView: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderColor: '#003f5c',
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
});
const mapStateToProps = state => {
  return {
    PostChitRes: state.AllActionReducer.PostChitRes,
    error: state.AllActionReducer.error,
    PostPhotoRes: state.AllActionReducer.PostPhotoRes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PostChit: payload => dispatch(AllAction.PostChit(payload)),
    AllListsNull: () => dispatch(AllAction.AllListsNull()),
    PostPhoto: payload => dispatch(AllAction.PostPhoto(payload)),
    getChitList: payload => dispatch(AllAction.getChitList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
