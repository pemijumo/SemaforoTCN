// const React = require("react")
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';


const CreateUpdateCliente = () => {

    
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
            // let Controller = `${API_URL}GetCatalog`;
            // let response = await fetch(Controller, 
            // {
            //     method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            //     body: JSON.stringify({ 
            //         Parameters: { TipoConsulta: 1 },
            //         StoredProcedure: "sp_Catalogos" 
            //     })
            
            // });

            // let json = await response.json();

            // console.log(json);
            // return await json;

            // console.log('se obtiene listado de almacenes')
            // let url_ = `${API_URL_GRAL}TrackStocks/ConsultaCatalogo?` 
            // + `_TipoCatalogo=` + "Almacenes"
            // + `&_UserId=` + user.Id_Usuario
            // + `&_Rol=` + user.RolHNT 
            // + `&_Sucursal=` + user.Sucursal
            // + `&_SlpCode=` + user.Vendedor 
            // + `&_Modulo=` + ""
            // + `&_RolApp=` + user.Rol 
            // let response = await fetch(url_);//axiosRequest({url: url_, method: 'GET', timeout: 15000 });
            // let json = await response.json();//.data
            // setListAlmacen(json);
            // return await json;//await response.json();
        }

      return (
        <View style={{flex: 1, padding:20}}>
            <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={{alignContent:"flex-end", alignItems:"flex-end"}}>                
                <Text style={{color:'black'}}>No Registro: 0</Text>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Nombre:</Text>
                <TextInput placeholder="Nombre" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Direccion:</Text>
                <TextInput placeholder="Direccion" style={styles.inputBox} />
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text style={{color:'black'}}>Telefono:</Text>
                <TextInput placeholder="Telefono" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Correo:</Text>
                <TextInput placeholder="Correo" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text style={{color:'black'}}>Tipo:</Text>
                <TextInput placeholder="Tipo" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <TouchableOpacity>
                    <Button mode="contained">Guardar</Button>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        )
}

export default (CreateUpdateCliente);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    }
})