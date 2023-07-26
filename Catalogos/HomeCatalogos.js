import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import TabNavigatorCatalogos from './TabNavigatorCatalogos';
import { Button, IconButton, TextInput } from 'react-native-paper';

const HomeCatalogos = (props) => {
    // const [TabActual, setTabActual] = React.useState("Clientes");

    // ActualizaTab = async (TabName) => {
    //     setTabActual(TabName)
    //     return await TabName;
    // }

    return (
    <View style={{flex:1, padding:10}}>
        
        <TabNavigatorCatalogos/>
    </View>
        )
}

export default (HomeCatalogos)