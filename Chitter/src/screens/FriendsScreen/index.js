import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class UserListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {image: 'https://bootdey.com/img/Content/avatar/avatar1.png'},
        {image: 'https://bootdey.com/img/Content/avatar/avatar6.png'},
        {image: 'https://bootdey.com/img/Content/avatar/avatar2.png'},
        {image: 'https://bootdey.com/img/Content/avatar/avatar3.png'},
        {image: 'https://bootdey.com/img/Content/avatar/avatar4.png'},
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {this.state.dataSource &&
              this.state.dataSource.map((val, i) => {
                return (
                  <View style={styles.box}>
                    <Image
                      style={styles.image}
                      source={{
                        uri:
                          'https://bootdey.com/img/Content/avatar/avatar1.png',
                      }}
                    />
                    <View style={styles.boxContent}>
                      <Text style={styles.title}>User Name</Text>
                      <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, elit consectetur
                      </Text>
                      <View style={styles.buttons}>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          style={[styles.button, styles.profile]}
                          onPress={() => alert('you click on folle')}>
                          <Text style={{color: 'white'}}>Follow</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: '#FF1493',
  },
  profile: {
    backgroundColor: '#1E90FF',
    width: 150,
  },
});
