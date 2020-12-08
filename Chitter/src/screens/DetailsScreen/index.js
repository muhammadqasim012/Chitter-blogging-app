import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {Text} from 'native-base';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
      ],
    };
  }
  render() {
    let data = this.props.navigation.state.params;
    console.log(data.urlToImage, 'here s');
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Image
            style={{
              width: '100%',
              alignSelf: 'center',
              height: 160,
              // marginTop: 40,
              resizeMode: 'contain',
            }}
            source={{uri: this.state.arr[0]}}
          />
          <Text style={[styles.heading, {textAlign: 'center', padding: 10}]}>
            {data.user.given_name}
          </Text>

          <Text note style={{textAlign: 'center'}}>
            {data.publishedAt}
          </Text>
          <Text style={{textAlign: 'justify', margin: 20, marginTop: 30}}>
            {data.chit_content}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 30,
    color: '#03599C',
  },
});

export default PostDetails;
