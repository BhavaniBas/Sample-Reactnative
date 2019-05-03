import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Fonts } from '../Fonts';

const h = Dimensions.get('window').height;
const height = h * 2;

export const STYLES = StyleSheet.create({

    splashContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    circle: {
        width: height,
        height,
        backgroundColor: '#000000',
        borderRadius: h,
        position: 'absolute',
        zIndex: -1
    },
    splashIcon: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    icon: {
        width: (Platform.OS === 'ios') ? 65 : 75,
        height: (Platform.OS === 'ios') ? 65 : 75,
        tintColor: '#1296db',
        marginTop: (Platform.OS === 'ios') ? 25 : 0
    },
    textTitle: {
        fontSize: (Platform.OS === 'ios') ? 16 : 18,
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 20,
        fontFamily: Fonts.QuicksandBold
    },
    sideMenuTextTitle: {
        fontSize: (Platform.OS === 'ios') ? 16 : 18,
        color: '#000000',
        marginLeft: 5,
        fontFamily: Fonts.QuicksandMedium
    },
    forgotText: {
        fontSize: (Platform.OS === 'ios') ? 16 : 18,
        color: '#A9A9A9',
        top: 5,
        alignItems: 'flex-end',
        textAlign: 'right',
        right: (Platform.OS === 'ios') ? 15 : 10,
        fontFamily: Fonts.QuicksandMedium,
        display: 'none'
    },
    textSubTitle: {
        fontSize: (Platform.OS === 'ios') ? 13 : 15,
        color: '#A9A9A9',
        marginTop: 10,
        alignItems: 'center',
        fontFamily: Fonts.QuicksandMedium
    },
    textField: {
        height: (Platform.OS === 'ios') ? 50 : 55,
        margin: 15,
        fontSize: 15,
        padding: 10,
        color: '#808080',
        fontFamily: Fonts.QuicksandMedium,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: Dimensions.get('screen').width - 50,
        marginLeft: 30,
        marginRight: 30,
        padding: 15,
        marginTop: 30,
        backgroundColor: '#1296db',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative'
    },
    TCPPButton: {
        width: Dimensions.get('screen').width - 50,
        marginLeft: 30,
        marginRight: 30,
        padding: 15,
        backgroundColor: '#1296db',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative'
    },
    nextText: {
        fontFamily: Fonts.QuicksandMedium,
        fontSize: (Platform.OS === 'ios') ? 16 : 18,
        color: '#fff',
        textAlign: 'center',
    },
    visibilityBtn: {
        position: 'absolute',
        right: 17,
        height: 35,
        width: 35,
        padding: 5,
        textAlign: 'right'
    },
    btnImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    textBox: {
        height: (Platform.OS === 'ios') ? 50 : 55,
        fontSize: 15,
        padding: 10,
        color: '#808080',
        fontFamily: Fonts.QuicksandMedium,
        position: 'relative',
        width: Dimensions.get('screen').width - 70
    },
    textBoxBtnHolder: {
        position: 'relative',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 50,
        margin: 15
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40
    },
    TCPPbottom: {
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    signUpIn: {
        fontFamily: Fonts.QuicksandBold,
        fontSize: (Platform.OS === 'ios') ? 14 : 16,
        color: '#A9A9A9',
        textAlign: 'center',
        top: 12,
        position: 'relative'
    },
    signUpNextIcon: {
        width: (Platform.OS === 'ios') ? 15 : 25,
        height: (Platform.OS === 'ios') ? 15 : 25,
        tintColor: '#1296db',
        left: 20,
        padding: 14
    },
    addressTextField: {
        height: (Platform.OS === 'ios') ? 70 : 75,
        margin: 15,
        fontSize: 15,
        padding: 10,
        color: '#808080',
        fontFamily: Fonts.QuicksandMedium,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    signUpNextBottom: {
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'flex-end',
        marginBottom: (Platform.OS === 'ios') ? 20 : 15,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    ImageContainer: {
        borderRadius: 10,
        width: 250,
        height: 250,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    imageEmptyText: {
        fontSize: (Platform.OS === 'ios') ? 13 : 15,
        color: '#000000',
        alignItems: 'center',
        fontFamily: Fonts.QuicksandMedium
    },
    datePickerText: {
        fontSize: 15,
        color: '#808080',
        alignSelf: 'flex-start',
        fontFamily: Fonts.QuicksandMedium,
        position: 'relative',
        margin: 5
    },
    datePicker: {
        flex: 1,
        height: (Platform.OS === 'ios') ? 50 : 55,
        margin: 15,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 50
    },
    checkBoxAlign: {
        fontSize: (Platform.OS === 'ios') ? 13 : 15,
        color: '#000000',
        padding: 10,
        left: 5,
        alignItems: 'flex-start',
        fontFamily: Fonts.QuicksandMedium
    },
    sideMenuTitleSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 5
    }
});