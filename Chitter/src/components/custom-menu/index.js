//This is an example code for Navigation Drawer with Custom Side bar//
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';

    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home Screen',
        screenToNavigate: 'Home',
        iconName: 'Entypo',
      },
      {
        navOptionThumb: 'plus',
        navOptionName: 'Add Blog',
        screenToNavigate: 'AddPost',
        iconName: 'Entypo',
      },
      {
        navOptionThumb: 'chip',
        navOptionName: 'Tech Posts',
        screenToNavigate: 'Tech',
        iconName: 'MaterialCommunityIcons',
      },
      {
        navOptionThumb: 'basketball',
        navOptionName: 'Sports Posts',
        screenToNavigate: 'Sports',
        iconName: 'MaterialCommunityIcons',
      },
      {
        navOptionThumb: 'users',
        navOptionName: 'Friends',
        screenToNavigate: 'Friends',
        iconName: 'Entypo',
      },
      {
        navOptionThumb: 'text-document-inverted',
        navOptionName: 'Privacy Policy',
        screenToNavigate: 'Privacy',
        iconName: 'Entypo',
      },
      {
        navOptionThumb: 'info',
        navOptionName: 'About App',
        screenToNavigate: 'About',
        iconName: 'Entypo',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={require('../../assests/splashScreen.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'white',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                marginTop: 5,
                backgroundColor:
                  global.currentScreenIndex === key ? '#03599C' : '#ffffff',
              }}
              key={key}>
              <View style={{marginRight: 10, marginLeft: 20}}>
                {item.iconName === 'Entypo' ? (
                  <Entypo
                    name={item.navOptionThumb}
                    size={25}
                    style={{
                      color:
                        global.currentScreenIndex === key ? 'white' : 'black',
                    }}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.navOptionThumb}
                    size={25}
                    style={{
                      color:
                        global.currentScreenIndex === key ? 'white' : 'black',
                    }}
                  />
                )}
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: global.currentScreenIndex === key ? 'white' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    width: '100%',
    height: 200,
  },
});

// our custom side menu

// 1 items array have the screen name and icons if you will add new screen then first add here in thay array after
//  that create new screen in screens folder then add navigation and config/navigation/index.js
