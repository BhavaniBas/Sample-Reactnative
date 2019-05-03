import React from 'react';
import { WebView, View, Platform, Text, TouchableOpacity, BackHandler,screen } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Fonts } from '../utils/Fonts';
import { STYLES } from '../utils/styles/CommonStyle';
import { RNToasty } from 'react-native-toasty'

class TermsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Terms Of Condition'
  }

  // todo : onBackButtonPress Android Functionality
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
   // const { isDone } = this.state;
    if (screen == this.TermsScreen) {
      this.props.navigation.navigate('registerNext');
      // if(this.state.isDone == false) {
      //   RNToasty.Error({ title: 'Please click done button in Privacy policy', duration: 1 });
      // } else {
      //   this.props.navigation.goBack(null);
      // }
      return false;
    };
  }

  render() {
    return (
      <View style={STYLES.container}>
        <WebView
          source={{ uri: 'https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true} />
      </View>
    );
  }
}

class PrivacyPolicyScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Privacy Policy'
  }

  handleDone = () => {
    this.setState({ isDone: true });
    this.props.navigation.navigate('registerNext');
  }

  render() {
    return (
      <View style={STYLES.container}>
        <WebView
          source={{ uri: 'https://facebook.github.io/react-native/docs/webview' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true} />
        <View style={STYLES.TCPPbottom}>
          <TouchableOpacity activeOpacity={0.8}
            onPress={this.handleDone}
            style={STYLES.TCPPButton}>
            <Text style={STYLES.nextText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({

  Tab1: { screen: TermsScreen },
  Tab2: { screen: PrivacyPolicyScreen }
},
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Tab1',
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: 'white',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'black',
      style: {
        backgroundColor: '#1296db',
        borderWidth: 2,
        borderColor: '#1296db'
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 16,
        fontFamily: Fonts.QuicksandBold,
        alignSelf: 'center',
        justifyContent: 'center'
      }
    }
  });
export default createAppContainer(TabNavigator);
