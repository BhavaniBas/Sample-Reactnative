import { combineReducers } from 'redux';
import checkReducers from '../reducers/checkReducers';

export default combineReducers({
    isChecking: checkReducers
})