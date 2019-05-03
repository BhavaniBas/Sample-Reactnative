import React, { Component } from 'react';
import { View, Animated, Dimensions, Image, BackHandler, screen, StatusBar } from 'react-native';
import { STYLES } from '../utils/styles/CommonStyle';
import { Fonts } from '../utils/Fonts'

const h = Dimensions.get('window').height;
const height = h * 2;

export default class Splash extends Component {

    circle = new Animated.Value(0);
    logo = new Animated.Value(0);
    title = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = { timePressed: false };
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        if (screen == this.Splash) {
            BackHandler.exitApp();
            return true;
        }
    };

    // todo : Mount Phase Lifecycle components - update state
    componentDidMount() {
        // todo : Animation Duration 
        Animated.sequence([
            Animated.timing(this.circle, {
                toValue: 1,
                duration: 200
            }),
            Animated.timing(this.logo, {
                toValue: 1,
                duration: 500
            }),
            Animated.timing(this.title, {
                toValue: 1,
                duration: 5000
            })
        ]).start();
        // todo : Handler 
        setTimeout(() => {
            this.props.navigation.navigate('login');
            // this.setState({ timePressed: true })
        }, 2000);
    }


    render() {
        console.disableYellowBox = true;
        // todo : Animation Input Range & Output Range
        const translateY = this.circle.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 0]
        });
        const translateX = this.logo.interpolate({
            inputRange: [0, 1],
            outputRange: [-h, 0]
        });
        const opacity = this.title.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });
        return (
            <View style={STYLES.splashContainer}>
                {/* todo: Status Bar set in Background  */}
                <StatusBar
                    barStyle='light-content'
                    hidden={false}
                    opaque={true}
                    networkActivityIndicatorVisible={true}>
                </StatusBar>

                <Animated.Image style={[STYLES.splashIcon, { transform: [{ translateY: translateX }] }]}
                    source={require('../images/ic_splash.png')}
                />
                <Animated.View style={[STYLES.circle, { transform: [{ translateY }] }]} />
                <Animated.Text style={{ fontFamily: Fonts.QuicksandBold, color: '#FFFFFF', fontSize: 22, opacity }}>React Native </Animated.Text>
            </View>
        );
        // todo : Splash Move to Login
        // if (this.state.timePressed == true) {
        //     return <SignIn />
        // } else {
        //     return (
        //         <View style={styles.container}>
        //             <Animated.Image style={[styles.icon, { transform: [{ translateY: translateX }] }]}
        //                 source={require('../images/ic_splash.png')} />
        //             <Animated.View style={[styles.circle, { transform: [{ translateY }] }]} />
        //             <Animated.Text style={{ fontFamily: Fonts.QuicksandBold, color: '#FFFFFF', fontSize: 22, opacity }}>React Native </Animated.Text>
        //         </View>
        //     );
        // }
    }
}


