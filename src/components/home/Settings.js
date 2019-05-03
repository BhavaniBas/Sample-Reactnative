import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Settings extends Component {
  
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> This is Activity - 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
    MainContainer: {
   
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
   
    },
   
    sideMenuContainer: {
   
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20
    },
   
    sideMenuProfileIcon:
    {
      resizeMode: 'center',
      width: 150, 
      height: 150, 
      borderRadius: 150/2
    },
   
    sideMenuIcon:
    {
      resizeMode: 'center',
      width: 28, 
      height: 28, 
      marginRight: 10,
      marginLeft: 20
      
    },
   
    menuText:{
   
      fontSize: 15,
      color: '#222222',
      
    }
   
  });