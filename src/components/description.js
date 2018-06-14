import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Rating from 'react-native-rating'
import Ripple from 'react-native-material-ripple'

let {height,width}=Dimensions.get('window')
let Description = (props)=>{
    let job=props.job
    return <View style={styles.descriptionContainer}>
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
                containerStyle={{alignSelf:'center',flex:1,flexDirection:'row'}}
            />
            <View style={styles.profilePic}>
                <Icon name={'md-person'} size={40} />
            </View>
            <View style={styles.profileDetails}>
                <Text style={styles.employerName}>{job.employerName}</Text>
                <Text style={styles.vacancy}>vacancy: {job.vacancy}</Text>
            </View>
        </View>
        <View style={styles.jobView}>
            <View style={{ flex: 0.9 }}>
                <Text style={styles.title} numberOfLines={1}>{job.title}</Text>
                <Text style={styles.description} >{job.description}</Text>
                <Text style={styles.address} >
                    <Text style={{ fontWeight: 'bold' }}>Address:</Text>
                    <Text >{job.address}</Text>
                </Text>
            </View>
            <View style={styles.timeView}>
                <Text style={styles.time}>Duration:{job.duration}</Text>
                <Text style={styles.time}>Date:{job.date}</Text>
            </View>
            <View style={styles.buttonView}>
                <Ripple
                    style={styles.button}
                    onPress={()=>props.onApply()}
                >
                    <Text style={styles.buttonText}>Apply</Text>
                </Ripple>
                <Ripple
                    style={styles.button}
                    onPress={()=>props.onSkip()}
                >
                    <Text style={styles.buttonText}>Skip</Text>
                </Ripple>
            </View>
        </View>
        </View>
}
const styles=StyleSheet.create({
    descriptionContainer:{
        width:width-40,
        backgroundColor:'white',
        marginHorizontal: 20, 
        borderRadius: 5,

    },
    profileView: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    profilePic: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileDetails: {
        alignItems: 'center'
    },
    employerName: {
        fontSize: 20
    },
    vacancy: {
        fontSize: 16,
        color: 'green'
    },
    jobView: {
        flex: 0.7,
        padding: 5
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 0.3
    },
    description: {
        fontSize: 14,
        marginTop: 8,
        flex: 0.5
    },
    address: {
        marginTop: 10
    },
    timeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.1,
        alignItems: 'flex-end',
        marginTop:10
    },
    time: {
        fontSize: 11,
        fontWeight: 'bold'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    button:{
        backgroundColor:'#3b5998',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
    },
    buttonText:{
        fontSize:18,
        color:'white'
    }
})

export {Description}