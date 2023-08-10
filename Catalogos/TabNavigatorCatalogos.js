import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ClienteList from './Cliente/ClienteList';
import PolizaList from './Poliza/PolizaList';
import InmuebleList from './Inmueble/InmuebleList';
let iconSize = 30
const Tab = createMaterialBottomTabNavigator();

const TabNavigatorCatalogos = (props) =>
{
    console.log(props)
    return (
        <Tab.Navigator
        shifting={true}
        initialRouteName = {"Clientes"}
        barStyle={{backgroundColor:'white'}}
        tabBarIcon={{backgroundColor:'orange', color:'orange'}}
       >
        <Tab.Screen name="Clientes" component={ClienteList}  
            listeners={{
            tabPress: (e) => {
                // props.ActualizaTab("Clientes")
              },
            }} 
            options = {({ navigation }) => ({
            tabBarLabel : 'Clientes',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'account-details'} /></View>),

            })}
        />
        <Tab.Screen name="Polizas" component={PolizaList}  
            listeners={{
                tabPress: (e) => {
                    // props.ActualizaTab("Polizas")
                  },
                }} 
            options = {({ navigation }) => ({
            tabBarLabel : 'Polizas',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'file-document'} /></View>),

            })}
        />
        <Tab.Screen name="Inmuebles" component={InmuebleList}  
            options = {({ navigation }) => ({
            tabBarLabel : 'Inmuebles',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'ballot'} /></View>),

            })}
        />
        <Tab.Screen name="Bloques" component={PolizaList}  
            options = {({ navigation }) => ({
            tabBarLabel : 'Bloques',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'apps'} /></View>),

            })}
        />
        <Tab.Screen name="Servicio" component={PolizaList}  
            options = {({ navigation }) => ({
            tabBarLabel : 'Servicio',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'server-plus'} /></View>),

            })}
        />
        <Tab.Screen name="Responsable" component={PolizaList}  
            options = {({ navigation }) => ({
            tabBarLabel : 'Responsable',
            tabBarIcon: ({ tintColor }) => (<View><IconButton style={[{ paddingBottom:20, bottom: 10, alignItems: 'center' }]} color='#ED9A0C' size={iconSize} icon={'account-tie-hat'} /></View>),

            })}
        />
        </Tab.Navigator>
        )

}

export default (TabNavigatorCatalogos)