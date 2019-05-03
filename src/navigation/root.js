import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../components/Splash';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import SignUpNext from '../components/SignUpNext';
import DrawerNavigator from '../navigation/DrawerNavigator'; 
import TermsConditionPrivacyPolicy from '../components/TermsConditionPrivacyPolicy';

const ScenesApp = {
    splash: {
        screen: Splash, navigationOptions: { header: null, headerMode: 'none' }
    },
    register: {
        screen: SignUp, navigationOptions: { header: null, headerMode: 'none' }
    },
    login: {
        screen: SignIn, navigationOptions: { header: null, headerMode: 'none' }
    },
    registerNext: {
        screen: SignUpNext
    },
    DrawerNavigator: {
        screen: DrawerNavigator, navigationOptions: { header: null }
    },
    termsPrivacy: {
        screen: TermsConditionPrivacyPolicy, navigationOptions: { header: null }
    }
}


const router = createStackNavigator({
    ...ScenesApp
}, {
        initialRouteName: 'splash',
    }
);

//make this component available to the app
const AppNavigator = createAppContainer(router);
export default AppNavigator;