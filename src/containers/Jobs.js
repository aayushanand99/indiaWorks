import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationActions } from "react-navigation";
import {jobs} from '../util/constants'
import {JobDetail,Description} from '../components'
import Toast from 'react-native-simple-toast'

export default class Jobs extends Component{
    constructor(props){
        super(props)
        this.state={selectedIndex:null}
    }

    renderJobs({item,index}){
        let tile = this.state.selectedIndex == index 
        ? <Description job={item} onApply={()=>this.onApply()} onSkip={()=> this.setState({selectedIndex:null})}/> 
        : <JobDetail job={item} onPress={() => this.setState({ selectedIndex: index })} />
        return tile
    }

    onApply(){
        Toast.show('Application sent to the employer')
    }

    renderSeparator(){
        return <View style={{ height: 10, backgroundColor:'#d3d3d3'}}/>
    }

    render(){
        return <View style={style.container}>
                    <FlatList
                        renderItem={(item)=>this.renderJobs(item)}
                        data={jobs}
                        keyExtractor={(item, index) => item.id}
                        ItemSeparatorComponent={()=>this.renderSeparator()}
                    />
                </View>
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d3d3d3'
    },
    tile:{
        padding:10,
        margin:20,
        backgroundColor:'#008ddd'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        justifyContent:'space-between',
    },
    skill:{
        fontSize:18,
        color:'white',
        marginVertical:10
    },
    tileFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    time:{
        color:'white'
    }
})