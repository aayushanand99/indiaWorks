import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Jobs from './Jobs'
import AppliedJobs from './AppliedJobs'
import PostedJobs from './PostedJobs'
import Notifications from './Notifications'
import Profile from './Profile'
import Categories from './Categories'

class BottomNavigationClass extends Component{
constructor(props){
    super(props)
    this.state = { active:2}
}
render(){
    let ActiveTab
    console.log(this.props)
    switch(this.state.active){
        case 0: ActiveTab=<PostedJobs navigation={this.props.navigation}/>
            break;
        case 1: ActiveTab = <AppliedJobs navigation={this.props.navigation}/>
            break;
        case 2: ActiveTab = <Categories navigation={this.props.navigation}/>
            break;
        case 3: ActiveTab = <Notifications navigation={this.props.navigation}/>
            break;
        case 4: ActiveTab = <Profile navigation={this.props.navigation}/>
    }
    return(
        <View style={{flex:1}}>
            {ActiveTab}
        <BottomNavigation
            labelColor="white"
                rippleColor="#1e7dff"
            activeTab={this.state.active}
            style={{
                height: 56,
                elevation: 8,
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0
            }}
            backgroundColor="#1e7dff"
            activeLabelColor="#fff"
            onTabChange={newTabIndex => this.setState({active:newTabIndex})}
        >
            <Tab
                label="Posted Jobs"
                icon={<Icon size={26} color="white" name="ios-people" />}
            />
            <Tab
                label="Applied Jobs"
                icon={<Icon size={26} color="white" name="md-podium" />}
            />
            <Tab
                label="Home"
                icon={<Icon size={26} color="white" name="ios-home" />}
            />
            <Tab
                label="Notifications"
                icon={<Icon size={26} color="white" name="ios-notifications" />}
            />
            <Tab
                label="Profile"
                icon={<Icon size={26} color="white" name="md-person" />}
            />
        </BottomNavigation>
                </View >

    )
}
}
function mapStateToProps(state) {
    return {
       
    };
}

export default connect(mapStateToProps, {})(BottomNavigationClass);

