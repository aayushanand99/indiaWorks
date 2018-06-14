import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';
import { TextField } from 'react-native-material-textfield';


export default class Fields extends Component{
    constructor(props){
        super(props)
        this.state={value:null}
    }

    getValue(){
        return this.state.value
    }


    render(){
        return(
            <TextField
                label={this.props.item}
                labelColor={'#ffffff'}
                onChangeText={(value)=>this.setState({value})}
            />
        )
    }
}