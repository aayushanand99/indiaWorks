import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet,Dimensions,TouchableWithoutFeedback,Image } from 'react-native';
import {
    Card,
    CardItem,
} from 'native-base';
const {width,height}= Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
import Rating from 'react-native-rating'


let Category = (props)=> {
    let item=props.item
    return (<Card style={{ borderRadius: 2, width}}>
        <CardItem cardBody >
            <TouchableWithoutFeedback onPress={()=>props.onPress()}>
                <CardItem style={{alignItems:'center',justifyContent:'center',width,padding:5}}>
                    <Image
                        source={item.icon}
                        style={{
                            height: height / 3,
                            width: width,
                        }}
                    />
                </CardItem>
            </TouchableWithoutFeedback>
        </CardItem>
        <CardItem style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#E84364', fontWeight: 'bold', fontSize: 18 }}>
                {item.title}
            </Text>
        </CardItem>
    </Card>)
}

let JobDetail = (props)=>{
    let job=props.job

    return (
        <TouchableWithoutFeedback onPress={()=>props.onPress()}>
        <View style={styles.jdContainer}>
            <View style={styles.profileView}>
                <Rating
                    selectedStar={require('../../assets/star_filled.png')}
                    editable={false}
                    starStyle={{
                        width: 20,
                        height: 20
                    }}
                    unselectedStar={require('../../assets/star_unfilled.png')}
                    initial={job.rating}
                    max={5}
                    />
                <View style={styles.profilePic}>
                    <Icon name={'md-person'} size={40}/>
                </View>
                <View style={styles.profileDetails}>
                    <Text style={styles.employerName}>{job.employerName}</Text>
                    <Text style={styles.vacancy}>vacancy: {job.vacancy}</Text>
                </View>
            </View>
            <View style={styles.jobView}>
                <View style={{flex:0.9}}>
                    <Text style={styles.title} numberOfLines={1}>{job.title}</Text>
                    <Text style={styles.description} numberOfLines={5}>{job.description}</Text>
                    <Text style={styles.address} numberOfLines={2}>
                        <Text style={{fontWeight:'bold'}}>Address:</Text>
                        <Text >{job.address}</Text>
                    </Text>
                    </View>
                    <View style={styles.timeView}>
                        <Text style={styles.time}>Duration:{job.duration}</Text>
                        <Text style={styles.time}>Date:{job.date}</Text>
                    </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    jdContainer:{
        height:150,
        width:width-40,
        marginHorizontal:20,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:5,
        borderColor: '#c9ebff',
        borderWidth:StyleSheet.hairlineWidth
    },
    profileView:{
        flex:0.3,
        flexDirection:'column',
        justifyContent:'center',
        borderRightColor:'#555',
        borderRightWidth:StyleSheet.hairlineWidth
    },
    profilePic:{
        backgroundColor:'white',
        height:50,
        width:50,
        borderRadius:50,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    profileDetails:{
        alignItems:'center'
    },
    employerName:{
        fontSize:20
    },
    vacancy:{
        fontSize:16,
        color:'green'
    },
    jobView:{
        flex:0.7,
        padding: 5
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        flex:0.4
    },
    description:{
        fontSize:14,
        marginTop:8,
        flex:0.5
    },
    address:{
        marginTop:3
    },
    timeView:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:0.1,
        alignItems:'flex-end'
    },
    time:{
        fontSize:11,
        fontWeight:'bold'
    }
})
export { Category, JobDetail}