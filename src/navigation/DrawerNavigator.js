import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, StatusBar, Dimensions,DrawerItems } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import home from '../components/home/Home';
import profile from '../components/home/Profile';
import integrationDetails from '../components/home/IntegrationDetails';
import settings from '../components/home/Settings';
import help from '../components/home/Help';
import aboutUs from '../components/home/AboutUs'
import { STYLES } from '../utils/styles/CommonStyle';

class HamburgerIcon extends Component {

  toggleDrawer = () => {
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 8, tintColor: '#FFFFFF' }} />
        </TouchableOpacity>
      </View>
    );
  }
}

class Custom_Side_Menu extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>

        {/* todo: Status Bar set in Background  */}
        <StatusBar
          barStyle='light-content'
          hidden={false}
          backgroundColor="#1296db"
          opaque={true}
          networkActivityIndicatorVisible={true} />

        <View style={styles.sideMenuProfileContainer}>
          <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
            style={styles.sideMenuProfileIcon} />
        </View>
        <View style={{ width: '100%' }}>
          <View style={STYLES.sideMenuTitleSpace}>
            <Image source={require('../images/ic_home.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('First') }}>
              <Text style={STYLES.sideMenuTextTitle}> Home </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
          <View style={STYLES.sideMenuTitleSpace}>
            <Image source={require('../images/ic_profile.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Second') }}>
              <Text style={STYLES.sideMenuTextTitle}> Profile </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
          <View style={STYLES.sideMenuTitleSpace} >
            <Image source={require('../images/ic_api.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Third') }}>
              <Text style={STYLES.sideMenuTextTitle}> Integration Details </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
          <View style={STYLES.sideMenuTitleSpace} >
            <Image source={require('../images/ic_settings.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Four') }}>
              <Text style={STYLES.sideMenuTextTitle}> Settings </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
          <View style={STYLES.sideMenuTitleSpace}  >
            <Image source={require('../images/ic_help.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Five') }}>
              <Text style={STYLES.sideMenuTextTitle}> Help </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
          <View style={STYLES.sideMenuTitleSpace} >
            <Image source={require('../images/ic_about_us.png')}
              style={styles.sideMenuIcon} />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Six') }}>
              <Text style={STYLES.sideMenuTextTitle}> AboutUs </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10 }} />
        </View>
      </View>
    );
  }
}

const home_StackNavigator = createStackNavigator({
  First: {
    screen: home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HamburgerIcon navigationProps={navigation}  onPress={() => navigation.navigate('DrawerOpen')} />,

      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  },
});


const profile_StackNavigator = createStackNavigator({
  Second: {
    screen: profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HamburgerIcon navigationProps={navigation}  onPress={() => navigation.navigate('DrawerOpen')}/>,

      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  },
});

const integrationDetails_StackNavigator = createStackNavigator({
  Third: {
    screen: integrationDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'IntegrationDetails',
      headerLeft: <HamburgerIcon navigationProps={navigation} onPress={() => navigation.navigate('DrawerOpen')}/>,

      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  },
});

const settings_StackNavigator = createStackNavigator({
  Four: {
    screen: settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <HamburgerIcon navigationProps={navigation} onPress={() => navigation.navigate('DrawerOpen')}/>,

      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  },
});
const help_StackNavigator = createStackNavigator({
  Five: {
    screen: help,
    navigationOptions: ({ navigation }) => ({
      title: 'Help',
      headerLeft: <HamburgerIcon navigationProps={navigation} onPress={() => navigation.navigate('DrawerOpen')}/>,
      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  },
});
const aboutUs_StackNavigator = createStackNavigator({
  Six: {
    screen: aboutUs,
    navigationOptions: ({ navigation }) => ({
      title: 'AboutUs',
      headerLeft: <HamburgerIcon navigationProps={navigation} onPress={() => navigation.navigate('DrawerOpen')} />,

      headerStyle: {
        backgroundColor: '#1296db'
      },
      headerTintColor: '#fff',
    })
  }
});

const router = createDrawerNavigator({
  HomeStack: {
    screen: home_StackNavigator
  },

  ProfileStack: {
    screen: profile_StackNavigator
  },

  IntegrationDetailsStack: {
    screen: integrationDetails_StackNavigator
  },
  SettingsStack: {
    screen: settings_StackNavigator
  },
  HelpStack: {
    screen: help_StackNavigator
  },
  AboutUsStack: {
    screen: aboutUs_StackNavigator
  }
},
  {
    drawerPosition: 'left',
    contentComponent: Custom_Side_Menu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: Dimensions.get('window').width - 80
  });


const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  sideMenuProfileContainer: {
    width: Dimensions.get('window').width - 80,
    height: 180,
    backgroundColor: '#808080',
    alignItems: 'center'
  },

  sideMenuProfileIcon: {
    width: 90,
    height: 90,
    top: 15,
    borderRadius: 90 / 2
  },
  sideMenuIcon: {
    resizeMode: 'center',
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20,
    tintColor: '#808080'
  }
});

const DrawerNavigator = createAppContainer(router);
export default DrawerNavigator;