import React, { Component } from 'react';
import {Image, Text, View, TextInput, TouchableOpacity, ScrollView, BackHandler, screen, StatusBar } from 'react-native';
import { STYLES } from '../utils/styles/CommonStyle';
import LinearGradient from 'react-native-linear-gradient';
import { RNToasty } from 'react-native-toasty';
import { Common } from '../utils/CommonUtils';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            email: '',
            password: ''
        };
    }

    onSignUpButton = () => {
        this.props.navigation.navigate('register')
    }

    handleChanges = (text, value) => {
        switch (value) {
            case 'email':
                this.setState({ email: text });
                break;
            case 'password':
                this.setState({ password: text });
                break;
        }

    }

    handleSignIn = () => {
        // const { email, password } = this.state;
        // if (email == '')
        //     RNToasty.Error({ title: 'Please enter an email address', duration: 1 });
        // else if (!Common.validateEmail(email))
        //     RNToasty.Error({ title: 'Please enter a valid email address', duration: 1 });
        // else if (password == '')
        //     RNToasty.Error({ title: 'Please enter a password', duration: 1 });
        // else if (password.length < 8)
        //     RNToasty.Error({ title: 'Your password must be at least 8 characters', duration: 1 });
        // else
            this.props.navigation.navigate('DrawerNavigator')
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    // todo : onBackButtonPress Android Functionality
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        if (screen == this.SignIn) {
            BackHandler.exitApp();
            return true;
        }
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <LinearGradient colors={['#F5F5F5', '#F5F5F5']} style={STYLES.container}>

                    {/* todo: Status Bar set in Background  */}
                    <StatusBar
                        barStyle='light-content'
                        hidden={false}
                        backgroundColor="#1296db"
                        opaque={true}
                        networkActivityIndicatorVisible={true}>
                    </StatusBar>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Image style={STYLES.icon} source={require('../images/ic_splash.png')} />
                        <Text style={STYLES.textTitle}>Welcome Back ,</Text>
                        <Text style={STYLES.textSubTitle}>Sign In to continue</Text>
                    </View>
                    {/* todo: SignIn Email Field */}

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
                    {/* todo: SignIn Password Field */}

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
                            maxLength={8}
                            editable={true}
                            keyboardType='default'
                            returnKeyType='done'
                            ref={(input) => this.emailAddress = input} />
                        <TouchableOpacity activeOpacity={0.8} style={STYLES.visibilityBtn} onPress={this.managePasswordVisibility}>
                            <Image source={(this.state.hidePassword) ? require('../images/ic_eye_hide.png') :
                                require('../images/ic_eye_view.png')} style={STYLES.btnImage} />
                        </TouchableOpacity>
                    </View>
                    {/* todo: Forgot Password Field */}

                    <Text style={STYLES.forgotText}>Forgot Password?</Text>

                    <View style={STYLES.bottom}>
                        {/* todo: SignIn Button Field */}
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={this.handleSignIn}
                            style={STYLES.button}>
                            <Text style={STYLES.nextText}>Sign In</Text>
                        </TouchableOpacity>
                        {/* todo: SignUp Field */}
                        <Text style={STYLES.signUpIn}>New User?
                         <Text onPress={this.onSignUpButton} style={{ color: '#1296db' }}> Sign Up</Text>
                        </Text>
                    </View>
                </LinearGradient >
            </ScrollView>
        );
    }
}