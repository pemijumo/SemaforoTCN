+// const React = require("react")
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';


const CreateUpdateInmueble = (props) => {
    const [vlIdInmueble, setvlIdInmueble] = React.useState(props.route.params.Registro);
    const [vlNombre, setvlNombre] = React.useState(props.route.params.Nombre);
    const [vlDireccion, setvlDireccion] = React.useState(props.route.params.Direccion);

    
     useEffect(() => {
         async function fetchData() {
           console.log(props.route.params.Registro)
         }
    
         fetchData();
    
       }, [])

        GuardaInmueble = async () => {

            let Controller = `${API_URL}InsertUpdateDeleteCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { 
                        TipoConsulta: 2, 
                        Opcion: 2,
                        IdInmueble: vlIdInmueble, 
                        Nombre: vlNombre, 
                        Direccion: vlDireccion, 
                        UserId: "0" },
                    StoredProcedure: "sp_Catalogos" 
                })
            
            });

            let json = await response.json();
            if(json.Type == "success")
            {
                setvlIdInmueble(json.Inmueble[0].IdInmueble)
            }

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
                <Text style={{color:'black'}}>No Registro: {vlIdInmueble}</Text>
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
                <TouchableOpacity
                onPress={()=> GuardaInmueble()}
                >
                    <Button mode="contained">Guardar</Button>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        )
}

export default (CreateUpdateInmueble);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    }
})