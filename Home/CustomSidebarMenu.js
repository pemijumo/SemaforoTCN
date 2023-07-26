import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';
import { API_URL } from '../Constantes/constants';

const CustomSidebarMenu = (props) => {

    const [ListMenu, setListMenu] = React.useState([]);
        
    useEffect(() => {
        async function fetchData() {
            ObtenerDatos();
            ObtenerMenuRol();

        }
   
        fetchData();
   
    }, [])

    ObtenerDatos = async ()=>{

    }

    ObtenerMenuRol= async ()=>{
      console.log('in obtener menu rol')
        let Controller = `${API_URL}ConsultaModulosSMF`;
            let response = await fetch(Controller, 
            {
                method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    Usuario: "0"
                })            
            });

            let menuList = [];

            let json = await response.json();
            console.log(json)
            try {
                if(json.length>0){
                  for(let i = 0; i < json.length; i++){
                    let valorobj = { Code: json[i].Code, navOptionThumb: json[i].Icono, navOptionName: json[i].Nombre, screenToNavigate: json[i].Pantalla }
                    menuList.push(valorobj)
                  }  
                }
                
              } catch (error) {
              }

              setListMenu(menuList)
            return await json;
    }

    return (
        <View >
         <View style={{flex:1}}>
            <Image 
                  source={require('../Imagenes/ImgUsuario.png')} 
                  style={styles.sideMenuProfileIcon}
                />
            
            
            <View style={{alignSelf:'center'}}>
                {/* <Text style={{fontWeight:'bold', color:'black'}}>{_NomUsuario}</Text> */}
            </View>
          </View>

          {ListMenu.map((item, key) => (
              <TouchableOpacity
                key={key}
                onPress={()=> {
                  //_CodeMenuActivo = item.Code
                  //this.setState({FilaActiva: item.Code/*key*/})
                  props.navigation.navigate(item.screenToNavigate);
                }
                }
                style={{ height: 40, marginTop: 3 
                //,backgroundColor: _CodeMenuActivo == item.Code ? '#e0dbdb' : '#ffffff'
                 ,alignItems:'flex-start'
                 , paddingLeft: 15
                 , paddingTop: 10
                 , color: 'black'
                }}
              >
                <View style={{flexDirection:'row'}}>
                <IconButton icon={item.navOptionThumb} style={{margin:-7, paddingRight:5}} size={25} color="black"/>
                <Text
                  style={{
                    fontSize: 15,
                    //color: _CodeMenuActivo == item.Code ? 'red' : 'black',
                    paddingLeft:10
                  }}
                  >
                  {item.navOptionName}
                </Text>
                </View>
              </TouchableOpacity>
           ))
        }  

        </View>

        
    )
}

export default (CustomSidebarMenu);

const styles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    sideMenuProfileIcon: {
     resizeMode: 'center',
       width: 125,
       height: 125,
       alignSelf:'center'
    
      // borderRadius: 400
    }
})
    