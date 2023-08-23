// const React = require("react")
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';
import ModalSelector from 'react-native-modal-selector'


const CreateUpdateCliente = (props) => {

    const [ListInmueble, setListInmueble] = React.useState([]);
    const [ListAdministrativo, setListAdministrativo] = React.useState([]);
    const [ListArquitectos, setListArquitectos] = React.useState([]);
    const [ListTipoCliente, setListTipoCliente] = React.useState([]);

    const [vlIdCliente, setvlIdCliente] = React.useState(props.route.params.Registro);
    const [vlNombre, setvlNombre] = React.useState(props.route.params.Nombre);
    const [vlDireccion, setvlDireccion] = React.useState(props.route.params.Direccion);
    const [vlIdInmueble, setvlIdInmueble] = React.useState(props.route.params.IdInMueble);
    const [vlDescInmueble, setvlDescInmueble] = React.useState(props.route.params.DescInmueble);
    const [vlPersonaContacto, setvlPersonaContacto] = React.useState(props.route.params.PersonaContacto);
    const [vlTelefono, setvlTelefono] = React.useState(props.route.params.Telefono);
    const [vlCorreo, setvlCorreo] = React.useState(props.route.params.Correo);
    const [vlOficina, setvlOficina] = React.useState(props.route.params.Oficina);
    const [vlIdAdministrativo, setvlIdAdministrativo] = React.useState(props.route.params.IdAdministrativo);
    const [vlDescAdministrativo, setvlDescAdministrativo] = React.useState(props.route.params.DescAdministrativo);
    const [vlIdArquitecto, setvlIdArquitecto] = React.useState(props.route.params.IdArquitecto);
    const [vlDescArquitecto, setvlDescArquitecto] = React.useState(props.route.params.DescArquitecto);
    const [vlIdTipoCliente, setvlIdTipoCliente] = React.useState(props.route.params.IdTipoCliente);
    const [vlDescTipoCliente, setvlDescTipoCliente] = React.useState(props.route.params.DescTipoCliente);
    
    console.log(props.route.params)
     useEffect(() => {
         async function fetchData() {
           GetLInmuebles();
           GetLAdministrativo();
           GetLArquitectos();
           GetLTipoClientes();
         }
    
         fetchData();
    
       }, [])

       GetLInmuebles = async () => {
        let Controller = `${API_URL}GetCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 2, Opcion : 1 },
                    StoredProcedure: "sp_Catalogos" 
                })            
            });

            let json = await response.json();
            let _InmuebleMap = json.map( res => ({ key : res.IdInmueble, label : res.Nombre }));
            console.log(_InmuebleMap);
            //let _InmuebleMap = datas.map((L1) => { return [ L1.key, L1.label ] } );

            setListInmueble(_InmuebleMap);
            return await json;//await response.json();
      }
      GetLAdministrativo = async () => {
        let Controller = `${API_URL}GetCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 3, Opcion : 1 },
                    StoredProcedure: "sp_Catalogos" 
                })            
            });

            let json = await response.json();
            let _CatLogMap = json.map( res => ({ key : res.IdAdministrativo, label : res.Nombre }));
            setListAdministrativo(_CatLogMap);
            return await json;
      }

      GetLArquitectos = async () => {
        let Controller = `${API_URL}GetCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 4, Opcion : 1 },
                    StoredProcedure: "sp_Catalogos" 
                })            
            });

            let json = await response.json();
            let _CatLogMap = json.map( res => ({ key : res.IdArquitecto, label : res.Nombre }));
            setListArquitectos (_CatLogMap);
            return await json;//await response.json();
      }

      GetLTipoClientes = async () => {
        let Controller = `${API_URL}GetCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 5, Opcion : 1 },
                    StoredProcedure: "sp_Catalogos" 
                })            
            });

            let json = await response.json();
            let _CatLogMap = json.map( res => ({ key : res.IdTipoCliente, label : res.Descripcion }));
            setListTipoCliente(_CatLogMap);
            return await json;//await response.json();
      }

        GuardaCliente = async () => {

            let Controller = `${API_URL}InsertUpdateDeleteCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { 
                        TipoConsulta: 1, 
                        Opcion: 2,
                        IdCliente: vlIdCliente, 
                        Nombre: vlNombre, 
                        Direccion: vlDireccion, 
                        IdInmueble: vlIdInmueble,
                        PersonaContacto: vlPersonaContacto,                        
                        Telefono: vlTelefono, 
                        Correo: vlCorreo, 
                        Oficina: vlOficina,
                        IdAdministrativo: vlIdAdministrativo,
                        IdArquitecto: vlIdArquitecto,
                        IdTipoCliente: vlIdTipoCliente,
                        UserId: "0" },
                    StoredProcedure: "sp_Catalogos" 
                })
            
            });

            let json = await response.json();
            if(json.Type == "success")
            {
                setvlIdCliente(json.Cliente[0].IdCliente)
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
                <Text style={{color:'black'}}>No Registro: {vlIdCliente}</Text>
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
            <Text style={{color:'black'}}>Inmueble:</Text> 
                <ModalSelector
                    data={ListInmueble}
                    initValue={vlDescInmueble}
                    onChange={(option)=>{ 
                        setvlIdInmueble(`${option.key}`)
                        setvlDescInmueble(`${option.label}`)
                    }}
                    style={{width:'100%', padding:0}}
                    sectionStyle = {{padding:0}}
                    cancelText={'Cancelar'}
                    >
                        <View style={{flexDirection:"row", backgroundColor: '#E2E2E2'}}>
                        <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:0, height:40, color:'white', flex:11}}
                        editable={false}
                        placeholder="Selecciona un inmueble"
                        placeholderTextColor="gray"
                        value={vlDescInmueble} />
                        
                        <IconButton  style={{height:20}} icon={'chevron-down'} ></IconButton>
                        </View>
                </ModalSelector>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text style={{color:'black'}}>Persona de contacto:</Text>
                <TextInput placeholder="Persona de contacto" style={styles.inputBox} value={vlPersonaContacto} onChangeText={text => setvlPersonaContacto(text)}/>
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
                <Text style={{color:'black'}}>Oficina:</Text>
                <TextInput placeholder="Oficina" style={styles.inputBox} value={vlOficina} onChangeText={text => setvlOficina(text)}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>               
            <Text style={{color:'black'}}>Administrativo:</Text> 
                <ModalSelector
                    data={ListAdministrativo}
                    initValue={vlDescAdministrativo}
                    onChange={(option)=>{ 
                        setvlIdAdministrativo(`${option.key}`)
                        setvlDescAdministrativo(`${option.label}`)
                    }}
                    style={{width:'100%', padding:0}}
                    sectionStyle = {{padding:0}}
                    cancelText={'Cancelar'}
                    >
                        <View style={{flexDirection:"row", backgroundColor: '#E2E2E2'}}>
                        <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:0, height:40, color:'white', flex:11}}
                        editable={false}
                        placeholder="Selecciona un administrativo"
                        placeholderTextColor="gray"
                        value={vlDescAdministrativo} />
                        <IconButton  style={{height:20}} icon={'chevron-down'} ></IconButton>
                        </View>
                </ModalSelector>
            </View>
            <View style={{paddingTop:10}}/>
            <View>               
            <Text style={{color:'black'}}>Arquitecto:</Text> 
                <ModalSelector
                    data={ListArquitectos}
                    initValue={vlDescArquitecto}
                    onChange={(option)=>{ 
                        setvlIdArquitecto (`${option.key}`)
                        setvlDescArquitecto (`${option.label}`)
                    }}
                    style={{width:'100%', padding:0}}
                    sectionStyle = {{padding:0}}
                    cancelText={'Cancelar'}
                    >
                        <View style={{flexDirection:"row", backgroundColor: '#E2E2E2'}}>
                        <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:0, height:40, color:'white', flex:11}}
                        editable={false}
                        placeholder="Selecciona un arquitecto"
                        placeholderTextColor="gray"
                        value={vlDescArquitecto} />
                        <IconButton  style={{height:20}} icon={'chevron-down'} ></IconButton>
                        </View>
                </ModalSelector>
            </View>
            <View style={{paddingTop:10}}/>
            <View>               
            <Text style={{color:'black'}}>Tipo cliente:</Text> 
                <ModalSelector
                    data={ListTipoCliente}
                    initValue={vlDescTipoCliente}
                    onChange={(option)=>{ 
                        setvlIdTipoCliente(`${option.key}`)
                        setvlDescTipoCliente(`${option.label}`)
                    }}
                    style={{width:'100%', padding:0}}
                    sectionStyle = {{padding:0}}
                    cancelText={'Cancelar'}
                    >
                        <View style={{flexDirection:"row", backgroundColor: '#E2E2E2'}}>
                        <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:0, height:40, color:'white', flex:11}}
                        editable={false}
                        placeholder="Selecciona un tipo de cliente"
                        placeholderTextColor="gray"
                        value={vlDescTipoCliente} />
                        <IconButton  style={{height:20}} icon={'chevron-down'} ></IconButton>
                        </View>
                </ModalSelector>
            </View>

            <View style={{paddingTop:10}}/>
            {/* <View>                
            <Text style={{color:'black'}}>Tipo:</Text>
                <TextInput placeholder="Tipo" style={styles.inputBox} value={vlTipo} onChangeText={text => setvlTipo(text)}/>
            </View> */}
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