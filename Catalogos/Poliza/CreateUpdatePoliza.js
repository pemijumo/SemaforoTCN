// const React = require("react")
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';


const CreateUpdatePoliza = (props) => {

    
     useEffect(() => {
         async function fetchData() {
            
         }
    
         fetchData();
    
       }, [])

       
        

      return (
        <View style={{flex: 1, padding:20}}>
            
            <View style={{alignContent:"flex-end", alignItems:"flex-end"}}>                
                <Text style={{color:'black'}}>In Poliza create update</Text>
            </View>
            
        </View>
        )
}

export default (CreateUpdatePoliza);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    }
})