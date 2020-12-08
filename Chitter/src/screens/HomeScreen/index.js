import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Slider, PostCard} from '../../components';
import {Text} from 'native-base';
import {connect} from 'react-redux';
import {AllAction} from '../../store/action/index';
import {NavigationEvents} from 'react-navigation';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      arr: [
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/windows_10_1584444124294.jpg?output-quality=80&output-format=webp',
        'https://i.gadgets360cdn.com/large/sundar_pichai_afp_full_1575545245314.jpg?output-quality=80&output-format=webp',
      ],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      console.log('Err', nextProps.error);
      this.props.AllListsNull();
    }
    if (nextProps.ChittListRes) {
      console.log('nextProps.ChittListRes', nextProps.ChittListRes);
      this.setState({
        dataSource: nextProps.ChittListRes,
      });

      this.props.AllListsNull();
    }
  }

  // and don't forget to remove the listener

  render() {
    let {dataSource} = this.state;
    console.log(dataSource[0], 'here is data');
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.sliderView}>
            <Slider />
          </View>
          <TouchableOpacity
            style={styles.Btn}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('AddPost')}>
            <Text style={styles.text}>Add Blog</Text>
          </TouchableOpacity>
          <View style={styles.latest}>
            <Text style={styles.heading}>Latest Posts</Text>

            <View style={styles.mainContainer}>
              {dataSource &&
                dataSource.map((val, i) => {
                  return (
                    <PostCard
                      onPress={() =>
                        this.props.navigation.navigate('Details', val)
                      }
                      key={i}
                      imagePath={this.state.arr[i]}
                      name={val.user.given_name}
                      info={val.chit_content}
                    />
                  );
                })}
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.Btn}
                activeOpacity={0.7}
                onPress={() => this.props.navigation.navigate('Tech')}>
                <Text style={styles.text}>Tech Blogs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.Btn, {margin: 4}]}
                activeOpacity={0.7}
                onPress={() => this.props.navigation.navigate('Sports')}>
                <Text style={styles.text}>Sports Blogs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  sliderView: {
    marginTop: 0.5,
  },
  latest: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    borderBottomColor: '#03599C',
    borderBottomWidth: 1.5,
    width: 143,
  },
  Btn: {
    width: '50%',
    backgroundColor: '#03599C',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
const mapStateToProps = state => {
  return {
    PostChitRes: state.AllActionReducer.PostChitRes,
    error: state.AllActionReducer.error,
    ChittListRes: state.AllActionReducer.ChittListRes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PostChit: payload => dispatch(AllAction.PostChit(payload)),
    AllListsNull: () => dispatch(AllAction.AllListsNull()),
    getChitList: payload => dispatch(AllAction.getChitList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
