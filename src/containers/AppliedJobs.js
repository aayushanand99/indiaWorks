import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { jobs } from '../util/constants'

export default class AppliedJobs extends Component {

    renderJobs({item,index}){
        return (<View style={{height:100,width:100,backgroundColor:'red'}}/>)
    }
    render() {
        return <FlatList
            data={jobs}
            renderItem={(item) => this.renderJobs(item)}
            keyExtractor={(item, index) => item.title}
            style={{ backgroundColor: '#ffffff', marginBottom: 56 }}
        />
    }
}