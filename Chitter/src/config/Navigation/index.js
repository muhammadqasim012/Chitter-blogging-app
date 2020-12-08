import React, {Component} from 'react';
import {View, Dimensions, TouchableOpacity, Keyboard} from 'react-native';

import {Icon} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {
  Signup,
  Login,
  Home,
  Details,
  About,
  Privacy,
  Tech,
  Sports,
  AddPost,
  Friends,
} from '../../screens';
import {CustomMenu} from '../../components';

global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  constructor() {
    super();
    this.state = {
      searchBarFocused: true,
    };
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  keyboardDidShow = () => {
    this.setState({searchBarFocused: true});
  };

  keyboardWillShow = () => {
    this.setState({searchBarFocused: true});
  };

  keyboardWillHide = () => {
    this.setState({searchBarFocused: false});
  };

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row', marginLeft: 15}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon name="menu" style={{color: 'white'}} />
        </TouchableOpacity>
      </View>
    );
  }
}

// Home Stack

const StackNavigatorForHome = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

// Tech Stack

const StackNavigatorForTech = createStackNavigator({
  Tech: {
    screen: Tech,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

// Tech Stack

const StackNavigatorForSports = createStackNavigator({
  Sports: {
    screen: Sports,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackNavigatorForPrivacy = createStackNavigator({
  Privacy: {
    //Title
    screen: Privacy,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackNavigatorForAboutApp = createStackNavigator({
  About: {
    //Title
    screen: About,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackNavigatorForAddPost = createStackNavigator({
  AddPost: {
    //Title
    screen: AddPost,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackNavigatorForFriends = createStackNavigator({
  Friends: {
    //Title
    screen: Friends,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#03599C',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Home: {
      screen: StackNavigatorForHome,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    Tech: {
      screen: StackNavigatorForTech,
      navigationOptions: {
        drawerLabel: 'Tech',
      },
    },
    Sports: {
      screen: StackNavigatorForSports,
      navigationOptions: {
        drawerLabel: 'Sports',
      },
    },
    Friends: {
      screen: StackNavigatorForFriends,
      navigationOptions: {
        drawerLabel: 'Friends',
      },
    },

    Privacy: {
      //Title
      screen: StackNavigatorForPrivacy,
    },
    About: {
      screen: StackNavigatorForAboutApp,
    },
    AddPost: {
      screen: StackNavigatorForAddPost,
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  },
);

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Main: {
    screen: DrawerNavigatorExample,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);
