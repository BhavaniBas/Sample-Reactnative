import React, { Component } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, BackHandler, screen } from 'react-native';
import { STYLES } from '../utils/styles/CommonStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Common } from '../utils/CommonUtils';
import { RNToasty } from 'react-native-toasty';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      confirmPassword: true,
      regEmail: '',
      regPassword: '',
      regConfirmPassword: ''
    };
  }

  handleChanges = (text, value) => {
    switch (value) {
      case 'email':
        this.setState({ regEmail: text });
        break;
      case 'password':
        this.setState({ regPassword: text });
        break;
      case 'confirmPassword':
        this.setState({ regConfirmPassword: text });
        break;
    }
  }

  onSignInButton = () => {
    this.props.navigation.navigate('login')
  }

  onNextButton = () => {
    const { regEmail, regPassword, regConfirmPassword } = this.state;
    if (regEmail == '')
      RNToasty.Error({ title: 'Please enter an email address', duration: 1 });
    else if (!Common.validateEmail(regEmail))
      RNToasty.Error({ title: 'Please enter a valid email address', duration: 1 });
    else if (regPassword == '')
      RNToasty.Error({ title: 'Please enter a password', duration: 1 });
    else if (regPassword.length < 8)
      RNToasty.Error({ title: 'Your password must be at least 8 characters', duration: 1 });
    else if (regConfirmPassword == '')
      RNToasty.Error({ title: 'Please enter a confirm password', duration: 1 });
    else if (regConfirmPassword.length < 8)
      RNToasty.Error({ title: 'Your password must be at least 8 characters', duration: 1 });
    else if (regPassword != regConfirmPassword)
      RNToasty.Error({ title: 'Password doesn\'t match', duration: 1 });
    else
      this.props.navigation.navigate('registerNext')
  }

  managePasswordVisibility = (visibleValue) => {
    switch (visibleValue) {
      case 'password':
        this.setState({ hidePassword: !this.state.hidePassword });
        break;
      case 'confirmPassword':
        this.setState({ confirmPassword: !this.state.confirmPassword });
        break;
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
    if (screen == this.SignUp) {
      this.props.navigation.goBack('SignIn');
      return true;
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={['#F5F5F5', '#F5F5F5']} style={STYLES.container}>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Image style={STYLES.icon} source={require('../images/ic_splash.png')} />
            <Text style={STYLES.textTitle}>Welcome Sign Up</Text>
          </View>
          {/* todo: Signup Email Field */}

          <Text style={STYLES.textTitle}>Email</Text>
          <TextInput style={STYLES.textField}
            onChangeText={(text) => this.handleChanges(text, 'email')}
            underlineColorAndroid='transparent'
            placeholder='abc@example.com'
            placeholderTextColor='#D3D3D3'
            autoCapitalize='words'
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType='next'
            numberOfLines={1}
            editable={true}
            onSubmitEditing={() => this.emailAddress.focus()} />
          {/* todo: Signup Password Field */}

          <Text style={STYLES.textTitle}>Password</Text>
          <View style={STYLES.textBoxBtnHolder}>
            <TextInput style={STYLES.textBox}
              onChangeText={(text) => this.handleChanges(text, 'password')}
              secureTextEntry={this.state.hidePassword}
              underlineColorAndroid='transparent'
              placeholder='******'
              placeholderTextColor='#D3D3D3'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='default'
              returnKeyType='next'
              maxLength={8}
              editable={true}
              onSubmitEditing={() => this.password.focus()}
              ref={(input) => this.emailAddress = input} />
            <TouchableOpacity activeOpacity={0.8} style={STYLES.visibilityBtn} onPress={() => this.managePasswordVisibility('password')}>
              <Image source={(this.state.hidePassword) ? require('../images/ic_eye_hide.png') :
                require('../images/ic_eye_view.png')} style={STYLES.btnImage} />
            </TouchableOpacity>
          </View>

          {/* todo: Signup Confirm Password Field */}

          <Text style={STYLES.textTitle}>Confirm Password</Text>
          <View style={STYLES.textBoxBtnHolder}>
            <TextInput style={STYLES.textBox}
              onChangeText={(text) => this.handleChanges(text, 'confirmPassword')}
              secureTextEntry={this.state.confirmPassword}
              underlineColorAndroid='transparent'
              placeholder='******'
              placeholderTextColor='#D3D3D3'
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={8}
              keyboardType='default'
              editable={true}
              returnKeyType='done'
              ref={(input) => this.password = input} />
            <TouchableOpacity activeOpacity={0.8} style={STYLES.visibilityBtn} onPress={() => this.managePasswordVisibility('confirmPassword')}>
              <Image source={(this.state.confirmPassword) ? require('../images/ic_eye_hide.png') :
                require('../images/ic_eye_view.png')} style={STYLES.btnImage} />
            </TouchableOpacity>
          </View>
          <View style={STYLES.bottom}>
            {/* todo: SignIn Button Field */}
            <TouchableOpacity activeOpacity={0.8} onPress={this.onNextButton}
              style={STYLES.button}>
              <Text style={STYLES.nextText}>Next(1/2)</Text>
            </TouchableOpacity>
            {/* todo: SignUp Field */}
            <Text style={STYLES.signUpIn}>Already have an Account?
                     <Text onPress={this.onSignInButton} style={{ color: '#1296db' }}> Sign In</Text>
            </Text>
          </View>
        </LinearGradient >
      </ScrollView>
    );
  }
}