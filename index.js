import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import AppReducer from './src/reducers/index';
import AppNavigator from './src/AppNavigator';

class MainApp extends React.Component {

    render() {
        const store = createStore(AppReducer, applyMiddleware(promise, thunk));
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('IndiaWorks', () => MainApp);