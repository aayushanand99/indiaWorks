import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import BottomNavigationClass from './containers/BottomNavigation'
import Jobs from './containers/Jobs'

const AppNavigator = StackNavigator({
    BottomNavigationClass: {
        screen: BottomNavigationClass,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
        })
    },
    Jobs:{
        screen: Jobs,
        navigationOptions: ({ navigation }) => ({
            title: 'Jobs',
        })
    }
}, {
        initialRouteName: "BottomNavigationClass"
    },
    {
        headerMode: "screen"
    }
);

export default AppNavigator;