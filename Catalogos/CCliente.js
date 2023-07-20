const React = require("react")
import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, TextInput } from 'react-native-paper';

const CCliente = () => {

    // useEffect(() => {
    //     async function fetchData() {
    //     //   GetAlmacenes();
    //     //   Dimensions.addEventListener("change", onChange);
    //     //   return () => {
    //     //     Dimensions.removeEventListener("change", onChange);
    //     //   };
    //     }
    
    //     fetchData();
    
    //   }, [])


      return (
        <View style={{flex: 1, padding:20}}>
            <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={{alignContent:"flex-end", alignItems:"flex-end"}}>                
                <Text>No Registro: 0</Text>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text>Nombre:</Text>
                <TextInput placeholder="Nombre" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text>Direccion:</Text>
                <TextInput placeholder="Direccion" style={styles.inputBox} />
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text>Telefono:</Text>
                <TextInput placeholder="Telefono" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
                <Text>Correo:</Text>
                <TextInput placeholder="Correo" style={styles.inputBox}/>
            </View>
            <View style={{paddingTop:10}}/>
            <View>                
            <Text>Tipo:</Text>
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

export default (CCliente);

const styles = StyleSheet.create({
    inputBox:{
        borderRadius:5, paddingLeft:100, height:35
    }
})