import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet,Image } from 'react-native';
import { categories } from '../util/constants'
import {Category} from '../components'
import { NavigationActions } from "react-navigation";


export default class Categories extends Component{

    navigate(item){
        const navigateAction = NavigationActions.navigate({
            routeName: "Jobs",
            action: NavigationActions.navigate({
                routeName: "Jobs",
                params: item.id
            })
        });
        this.props.navigation.dispatch(navigateAction);

        const { navigate } = this.props.navigation;
    }

    renderCategories({item,index}){
        console.log(item)
        return (<Category item={item} onPress={()=>{this.navigate(item)}}/>)
    }

    render(){
        return (
           <FlatList
                data={categories}
                renderItem={(item)=>this.renderCategories(item)}
                keyExtractor={(item, index) => item.title}
                style={{backgroundColor:'#ffffff',marginBottom:56}}
           />
        )
    }
}