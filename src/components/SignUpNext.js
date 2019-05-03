import React, { Component } from 'react';
import { Text, TextInput, ScrollView, navigation, Platform, Image, BackHandler, TouchableOpacity, screen, StatusBar, Picker, View, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'native-base';
import { STYLES } from '../utils/styles/CommonStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../utils/Fonts';
import ImagePicker from 'react-native-image-picker';
import { Common } from '../utils/CommonUtils';
import { RNToasty } from 'react-native-toasty';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';
//import { connect } from 'react-redux';
//import { checkBoxISChecking } from '../utils/CommonUtils';

var options = {
    "1": "Male",
    "2": "Female",
    "3": "Other"
};

export default class SignUpNext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PickerSelectedVal: '',
            ImageSource: null,
            firstName: '',
            lastName: '',
            address: '',
            mobileNo: '',
            city: '',
            state: '',
            pincode: '',
            DateText: '',
            DateHolder: null,
            isCheck: false
        };
    }

    // todo: Header Text,Style,Title 
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableWithoutFeedback
                    onPress={() => { navigation.goBack(null) }}>
                    <Image style={STYLES.signUpNextIcon} source={require('../images/ic_back_arrow.png')} />
                </TouchableWithoutFeedback >
            ),
            headerTitle: 'Verification Details',
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#1296db',
            headerTitleStyle: {
                fontFamily: Fonts.QuicksandBold,
                fontSize: (Platform.OS === 'ios') ? 16 : 18,
                padding: 5,
                left: (Platform.OS === 'ios') ? 0 : 20,
                color: '#1296db',
                textAlign: 'center'
            },
        };
    };

    // todo : onBackButtonPress Android Functionality
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    componentWillUnmount() {
        StatusBar.setHidden(false);
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        if (screen == this.SignUpNext) {
            this.props.navigation.goBack('register');
            return true;
        }
    };

    checkBoxTesting = () => {
        if (this.state.isCheck == false) {
            this.setState({ isCheck: !this.state.isCheck });
            this.props.navigation.navigate('termsPrivacy');
        }
    }

    handleChanges = (text, value) => {
        switch (value) {
            case 'firstName':
                this.setState({ firstName: text });
                break;
            case 'lastName':
                this.setState({ lastName: text });
                break;
            case 'address':
                this.setState({ address: text });
                break;
            case 'mobile':
                this.setState({ mobileNo: text });
                break;
            case 'city':
                this.setState({ city: text });
                break;
            case 'state':
                this.setState({ state: text });
                break;
            case 'pincode':
                this.setState({ pincode: text });
                break;
        }
    }

    handleSubmit = () => {
        const { firstName, lastName, address, mobileNo, city, state, pincode, ImageSource, isCheck } = this.state;
        if (firstName == '')
            RNToasty.Error({ title: 'Please enter first name', duration: 1 });
        else if (!Common.validateName(firstName))
            RNToasty.Error({ title: 'Please enter a valid name', duration: 1 });
        else if (lastName == '')
            RNToasty.Error({ title: 'Please enter last name', duration: 1 });
        else if (!Common.validateName(lastName))
            RNToasty.Error({ title: 'Please enter a valid name', duration: 1 });
        else if (address == '')
            RNToasty.Error({ title: 'Please enter address', duration: 1 });
        else if (mobileNo == '')
            RNToasty.Error({ title: 'Please enter mobile number', duration: 1 });
        else if (!Common.validateMobileNumber(mobileNo))
            RNToasty.Error({ title: 'Please enter a valid mobile number', duration: 1 });
        else if (city == '')
            RNToasty.Error({ title: 'Please enter city', duration: 1 });
        else if (state == '')
            RNToasty.Error({ title: 'Please enter state', duration: 1 });
        else if (pincode == '')
            RNToasty.Error({ title: 'Please enter pincode', duration: 1 });
        else if (ImageSource != 'null')
            RNToasty.Error({ title: 'Please upload image', duration: 1 });
        else if (isCheck == false)
            RNToasty.Error({ title: 'Please check terms and condition and privacy policy', duration: 1 })
        else
            this.props.navigation.navigate('DrawerNavigator')
    }

    /**
   * Textbox click listener
   */
    DatePickerMainFunctionCall = () => {

        let DateHolder = (DateHolder == null) ? this.state.DateText : this.state.DateHolder;
        if (!DateHolder || DateHolder == null) {
            DateHolder = new Date();
            this.setState({
                DateHolder: DateHolder
            });
        } else {
            DateHolder = new Date(this.state.DateText);
            this.setState({
                DateHolder: DateHolder
            });
        }

        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
            //  maxDate: new Date() --------------> //To restirct future date
        });
    }

    /**
     * Call back for dob date picked event
     *
     */
    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MMM-YYYY')
        });
    }

    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                console.log('User tapped custom button -----> : ', response.origURL);
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    ImageSource: source,
                });
            }
        });
    }


    render() {
        return (
            <View style={STYLES.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <LinearGradient colors={['#F5F5F5', '#F5F5F5']} style={STYLES.container}>

                        {/* todo: SignupNext First Name Field */}
                        <ScrollView nestedScrollEnabled={true}>

                            <Text style={STYLES.textTitle}>First Name</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'firstName')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='words'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='next'
                                numberOfLines={1}
                                editable={true}
                                onSubmitEditing={() => this.firstName.focus()} />

                            {/* todo: SignupNext Last Name Field */}

                            <Text style={STYLES.textTitle}>Last Name</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'lastName')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='words'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='next'
                                numberOfLines={1}
                                editable={true}
                                ref={(input) => this.firstName = input}
                                onSubmitEditing={() => this.lastName.focus()} />

                            {/* todo: SignupNext Address Field */}

                            <Text style={STYLES.textTitle}>Address</Text>
                            <TextInput style={STYLES.addressTextField}
                                onChangeText={(text) => this.handleChanges(text, 'address')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='words'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='next'
                                numberOfLines={2}
                                editable={true}
                                ref={(input) => this.lastName = input}
                                onSubmitEditing={() => this.address.focus()} />

                            {/* todo: SignupNext DOB Field */}

                            <Text style={STYLES.textTitle}>DOB</Text>
                            <TouchableOpacity style={STYLES.datePicker} onPress={this.DatePickerMainFunctionCall} >
                                <Text style={STYLES.datePickerText}>{(this.state.DateText == '') ?
                                    moment(new Date()).format('DD-MMM-YYYY') : this.state.DateText}</Text>
                            </TouchableOpacity>
                            {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
                            <DatePickerDialog
                                ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction} />

                            {/* todo: SignupNext Gender Field */}

                            <Text style={STYLES.textTitle}>Gender</Text>
                            <View style={STYLES.textField}>
                                <Picker style={{ flex: 1, width: "100%" }} mode='dropdown'
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.PickerSelectedVal}
                                    onValueChange={(itemValue, itemIndex) => this.setState({
                                        PickerSelectedVal: itemValue
                                    })}>
                                    {Object.keys(options).map((key) => {
                                        return (<Picker.Item label={options[key]} value={key} key={key} />)
                                    })}
                                </Picker>
                            </View>

                            {/* todo: SignupNext Mobile Number Field */}

                            <Text style={STYLES.textTitle}>Mobile Number</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'mobile')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='phone-pad'
                                returnKeyType='next'
                                numberOfLines={1}
                                editable={true}
                                maxLength={10}
                                ref={(input) => this.address = input}
                                onSubmitEditing={() => this.mobile.focus()} />

                            {/* todo: SignupNext City Field */}

                            <Text style={STYLES.textTitle}>City</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'city')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='words'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='next'
                                numberOfLines={1}
                                editable={true}
                                ref={(input) => this.mobile = input}
                                onSubmitEditing={() => this.city.focus()} />

                            {/* todo: SignupNext State Field */}

                            <Text style={STYLES.textTitle}>State</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'state')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='words'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='next'
                                numberOfLines={1}
                                editable={true}
                                ref={(input) => this.city = input}
                                onSubmitEditing={() => this.statevalue.focus()} />

                            {/* todo: SignupNext Pincode Field */}

                            <Text style={STYLES.textTitle}>Pincode</Text>
                            <TextInput style={STYLES.textField}
                                onChangeText={(text) => this.handleChanges(text, 'pincode')}
                                underlineColorAndroid='transparent'
                                placeholderTextColor='#D3D3D3'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                numberOfLines={1}
                                editable={true}
                                ref={(input) => this.statevalue = input} />

                            {/* todo: SignupNext Image Upload Field */}

                            <Text style={STYLES.textTitle}>Verification Document</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: 15, marginleft: 20 }}>
                                <TouchableOpacity onPress={this.selectPhotoTapped}>
                                    <View style={STYLES.ImageContainer}>
                                        {this.state.ImageSource === null ? <Text style={STYLES.imageEmptyText}>Select a Photo</Text> :
                                            <Image style={STYLES.ImageContainer} source={this.state.ImageSource} />}
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', top: 10, margin: 8 }}>
                                <CheckBox style={{ alignSelf: 'center' }}
                                    checked={this.state.isCheck}
                                    //  onValueChange={() => this.setState({ isCheck: !this.props.navigation.state.params.isCheck})}
                                    onPress={this.checkBoxTesting} />
                                <Text style={STYLES.checkBoxAlign}>I agree to the Terms of condition and Privacy policy</Text>
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </ScrollView>

                <View style={STYLES.signUpNextBottom}>
                    {/* todo: SignUp Next Submit Button Field */}

                    <TouchableOpacity activeOpacity={0.8}
                        onPress={this.handleSubmit}
                        style={STYLES.button}>
                        <Text style={STYLES.nextText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//       isCheck: state.isChecking
//     }
// }

// export default connect(mapStateToProps, checkBoxISChecking)(SignUpNext);