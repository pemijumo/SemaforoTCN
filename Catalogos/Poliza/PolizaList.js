import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';

const PolizaList = (props) => {
    useEffect(() => {
        async function fetchData() {
           //console.log(props)
           
        }
   
        fetchData();
   
      }, [])

    return (
    <View>
        <View style={{backgroundColor:'orange', width:95, borderRadius:5}}>
                    <TouchableOpacity
                    onPress={()=> {
                        props.navigation.navigate("CreateUpdatePoliza",{})
                        }
                    }
                    >
                    <View style={{flexDirection:'row'}}>
                        <IconButton icon={"account-plus"} color="white" style={{padding:0, margin:0}} size={18}></IconButton>
                        <Text style={{color:'black', paddingTop:7, fontSize:11}}>Nuevo</Text>
                      </View>
                        
                    </TouchableOpacity>
        </View> 
    </View>
        )
}

export default (PolizaList)