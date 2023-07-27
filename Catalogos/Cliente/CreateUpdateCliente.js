// const React = require("react")
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';


const CreateUpdateCliente = (props) => {
    const [vlIdCliente, setvlIdCliente] = React.useState(props.route.params.Registro);
    const [vlNombre, setvlNombre] = React.useState(props.route.params.Nombre);
    const [vlDireccion, setvlDireccion] = React.useState(props.route.params.Direccion);
    const [vlTelefono, setvlTelefono] = React.useState(props.route.params.Telefono);
    const [vlCorreo, setvlCorreo] = React.useState(props.route.params.Correo);
    const [vlTipo, setvlTipo] = React.useState(props.route.params.Tipo);
    
     useEffect(() => {
         async function fetchData() {
           console.log(props.route.params.Registro)
         }
    
         fetchData();
    
       }, [])

        GuardaCliente = async () => {

            let Controller = `${API_URL}InsertUpdateCliente`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    IdCliente: vlIdCliente, 
                    Nombre: vlNombre, 
                    Direccion: vlDireccion, 
                    Telefono: vlTelefono, 
                    Correo: vlCorreo, 
                    Tipo: vlTipo, 
                    Usuario: "0"
                })
            
            });

            let json = await response.json();
            console.log(json)

            Alert.alert(
                'Mensaje:', json.Message,//MensajeValidaciones,
                [{ text: 'OK', onPress: () => console.log('Presionó OK'), style: 'cancel',}],
                {cancelable: false},
              );


           
        }

      return (
        <View style={{flex: 1, padding:20}}>
            <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={{alignContent:"flex-end", alignItems:"flex-end"}}>                
                <Text style={{color:'black'}}>No Registro: {props.route.params.Registro}</Text>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Nombre:</Text>
                <TextInput placeholder="Nombre" style={styles.inputBox} value={vlNombre} onChangeText={text => setvlNombre(text)} />
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Direccion:</Text>
                <TextInput placeholder="Direccion" style={styles.inputBox} value={vlDireccion} onChangeText={text => setvlDireccion(text)} />
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text style={{color:'black'}}>Telefono:</Text>
                <TextInput placeholder="Telefono" style={styles.inputBox} value={vlTelefono} onChangeText={text => setvlTelefono(text)}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text style={{color:'black'}}>Correo:</Text>
                <TextInput placeholder="Correo" style={styles.inputBox} value={vlCorreo} onChangeText={text => setvlCorreo(text)}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text style={{color:'black'}}>Tipo:</Text>
                <TextInput placeholder="Tipo" style={styles.inputBox} value={vlTipo} onChangeText={text => setvlTipo(text)}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <TouchableOpacity
                onPress={()=> GuardaCliente()}
                >
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