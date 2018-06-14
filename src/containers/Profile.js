import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, ScrollView, TouchableOpacity,Image} from 'react-native';
import { profileFields} from '../util/constants'
import Fields from '../components/Fields'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
var ImagePicker = require('react-native-image-picker');

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={profileView:null}
    }

    onSubmit(){
        profileFields.map((item,index)=>{
            console.log(this.refs[item].getValue())
        })
        
    }

    selectProfilePic(){
        var options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    profileView: source
                });
            }
        });
    }

    render() {
        return(
            <KeyboardAwareScrollView style={styles.profileView}>
                    <View style={styles.profilePicView}>
                        <View style={styles.picView}>
                        {this.state.profileView && <Image source={this.state.profileView} style={{height:90,width:90,borderRadius:45,position:'absolute',top:0,zIndex:0}}/>}
                        {!this.state.profileView && <Icon name={'md-person'} size={45} color={'white'}/>}
                        <TouchableOpacity style={styles.editImageView} onPress={() => { this.selectProfilePic() }}>
                            <FontAwesomeIcon name={'edit'} size={20} color={'white'}/>
                            <Text style={{color:'white'}}>Edit</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{backgroundColor:'white'}} >
                    {
                        profileFields.map((item, index) => {
                            return <Fields ref={item} item={item}/>
                        })
                    }
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        padding:8,
        marginBottom:56
    },
    profileView:{
        flex:1,
        backgroundColor:'transparent',
        marginBottom: 56

    },
    profilePicView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:150,
        backgroundColor:'#fff',
        flexDirection:'row'
    },
    picView:{
        height:90,
        width:90,
        borderRadius:45,
        backgroundColor:'#555',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        backgroundColor:'white'
    },
    editImageView:{
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius:45,
        overflow:'hidden',
        position:'absolute',
        bottom:0,
        zIndex:1,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.5)'
    }
})