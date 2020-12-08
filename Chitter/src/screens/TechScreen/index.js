import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {PostCard, LoadingScreen} from '../../components';

class TechScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [
        {
          title: 'Google Removing Fake Coronavirus Videos From YouTube: Pichai',
          urlToImage:
            'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
          publishedAt: '17 March 2020 20:06 IST',
        },
        {
          title:
            'Microsoft’s Windows 10 Is Now Running on 1 Billion Active Devices',
          urlToImage:
            'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
          publishedAt: '17 March 2020 20:06 IST',
        },
        {
          title: 'Google Removing Fake Coronavirus Videos From YouTube: Pichai',
          urlToImage:
            'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
          publishedAt: '17 March 2020 20:06 IST',
        },
        {
          title:
            'Microsoft’s Windows 10 Is Now Running on 1 Billion Active Devices',
          urlToImage:
            'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
          publishedAt: '17 March 2020 20:06 IST',
        },
      ],
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }

  render() {
    let {dataSource} = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        {this.state.loading ? (
          <LoadingScreen />
        ) : (
          <ScrollView style={{flex: 1}}>
            <View style={styles.mainContainer}>
              {dataSource &&
                dataSource.map((val, i) => {
                  return (
                    <PostCard
                      onPress={() =>
                        this.props.navigation.navigate('Details', val)
                      }
                      key={i}
                      imagePath={val.urlToImage}
                      name={val.title}
                      info={val.publishedAt}
                    />
                  );
                })}
            </View>
          </ScrollView>
        )}
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  mainContainer: {
    marginTop: 25,
  },
});

export default TechScreen;
