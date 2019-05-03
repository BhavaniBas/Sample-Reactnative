import AppNavigator from '../navigation/root';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const store  = createStore(reducers);

export default class AppLaunch extends Component {
    render() {
        return (
            <Provider store = {store}>
            <AppNavigator />
           </Provider>
        );
    }
}