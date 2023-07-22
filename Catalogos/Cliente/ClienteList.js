// const React = require("react")
import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';
import { Table, Row, Cell } from 'react-native-table-component';

const CCliente = () => {
    const [ListClientes, setListClientes] = React.useState([]);
    const [tableHeadEntregar, setHeadEntregar] = React.useState(['Lista de clientes']);
    const [widthHeader, setwidthHeader] = React.useState([1]);
     useEffect(() => {
         async function fetchData() {
            GetClientes();
    //     //   Dimensions.addEventListener("change", onChange);
    //     //   return () => {
    //     //     Dimensions.removeEventListener("change", onChange);
    //     //   };
         }
    
         fetchData();
    
       }, [])

        GetClientes = async () => {
            let Controller = `${API_URL}GetCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 1 },
                    StoredProcedure: "sp_Catalogos" 
                })
            
            });

            let json = await response.json();
            setListClientes(json)
            return await json;
        }

      return (
        <View style={{flex: 1, padding:20}}>
                <View style={{backgroundColor:'orange', width:95, borderRadius:5, paddingRight:5}}>
                    <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <IconButton icon={"account-plus"} color="white" style={{padding:0, margin:0}} size={18}></IconButton>
                        <Text style={{color:'black', paddingTop:7, fontSize:11}}>Nuevo</Text>
                      </View>
                        
                    </TouchableOpacity>
                </View> 
                <View style={{flexDirection:"row", paddingTop:2}}>
                <Table style={{flex:1}} borderStyle={{borderWidth: 0, borderColor: '#c8e1ff'}}>
                <Row data={tableHeadEntregar} flexArr={widthHeader} style={styles.header} textStyle={styles.text}/>
                </Table>
                </View> 
                <FlatList
                    data={ListClientes}
                    renderItem={({ item, index }) => (
                        <View style={{backgroundColor: index % 2 === 0 ? 'white' : '#BED3DC'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{flex:10}}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold',}}> {item.Nombre}</Text>                
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize: 15}}> {item.Direccion}</Text>                
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize: 15}}> {item.Telefono}</Text>                
                            </View>
                        </View>
                        <View style={{flex:2}}>
                            <IconButton icon={"pencil"} color="#ED9A0C" size={20}></IconButton>
                        </View>
                        <View style={{flex:2}}>
                            <IconButton icon={"delete"} color="#ED9A0C" size={20}></IconButton>
                        </View>
                        </View>
                      </View>
                      
                    )}
                    keyExtractor={item => item.idCliente}
                
                />

                
        </View>
        )
}

export default (CCliente);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    },
    header: {backgroundColor: '#004481'},
    text: { margin: 6, textAlign:'center', color:'white' }
})