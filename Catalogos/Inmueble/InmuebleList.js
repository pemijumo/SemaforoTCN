import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../../Constantes/constants';
import { Table, Row, Cell } from 'react-native-table-component';
import { Alert } from 'react-native';


const InmuebleList = (props) => {
    const [ListInmuebles, setListInmuebles] = React.useState([]);
    const [tableHeadEntregar, setHeadEntregar] = React.useState(['INMUEBLES']);
    const [widthHeader, setwidthHeader] = React.useState([1]);
     useEffect(() => {
         //async function fetchData() {
            const unsubscribe = props.navigation.addListener('focus', () => {
                GetInmuebles();
                //Put your Data loading function here instead of my loadData()
              });
          
              return unsubscribe;
         //}
    
         //fetchData();
    
       }, [props.navigation])

        GetInmuebles = async () => {
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
            setListInmuebles(json)
            return await json;
        }

        DeleteInmuebleFunction = async (vlIdInmueble) => {
            let Controller = `${API_URL}InsertUpdateDeleteCatalog`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Parameters: { TipoConsulta: 2, Opcion : 3, IdInmueble: vlIdInmueble },
                    StoredProcedure: "sp_Catalogos" 
                })
            
            });

            let json = await response.json();

            Alert.alert(
                'Mensaje:', json.Message,//MensajeValidaciones,
                [{ text: 'OK', onPress: () => GetInmuebles(), style: 'cancel',}],
                {cancelable: false},
              );
        }



       

      return (
        <View style={{flex: 1}}>
                <View style={{backgroundColor:'orange', width:95, borderRadius:5}}>
                    <TouchableOpacity
                    onPress={()=> {
                        props.navigation.navigate("CreateUpdateInmueble",{
                            Registro: 0,
                            Nombre : "",
                            Direccion : "",                          
                        })
                        }
                    }
                    >
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
                    data={ListInmuebles}
                    renderItem={({ item, index }) => (
                        <View style={{backgroundColor: index % 2 === 0 ? 'white' : '#BED3DC'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{flex:8}}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold', color:'black'}}> {item.Nombre}</Text>                
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize: 15, color:'black'}}> {item.Direccion}</Text>                
                            </View>
                        </View>
                        <View style={{flex:2}}>
                            <IconButton 
                            onPress={()=> props.navigation.navigate("CreateUpdateInmueble",{ 
                                Registro : item.IdInmueble,
                                Nombre : item.Nombre,
                                Direccion : item.Direccion,
                            })}
                            icon={"pencil"} color="#ED9A0C" size={20}>

                            </IconButton>
                        </View>
                        <View style={{flex:2}}>
                            <IconButton icon={"delete"} color="#ED9A0C" size={20}
                            onPress={() => 
                                Alert.alert(
                                    'Eliminación',
                                    '¿Esta seguro de eliminar el registro de este inmueble?',
                                    [
                                      { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                      { text: 'Si', onPress: ()  => {
                                            DeleteInmuebleFunction(item.IdInmueble);
                                        }
                                      },
                                    ],
                                    { cancelable: false }
                                  )
                            }
                            ></IconButton>
                        </View>
                        </View>
                      </View>
                      
                    )}
                    keyExtractor={item => item.IdInmueble}
                
                />

                
        </View>
        )
}

export default (InmuebleList);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    },
    header: {backgroundColor: '#004481'},
    text: { margin: 6, textAlign:'center', color:'white' }
})  