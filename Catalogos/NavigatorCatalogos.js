import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeCatalogos from './HomeCatalogos';
import CreateUpdateCliente from './Cliente/CreateUpdateCliente';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';

import CreateUpdatePoliza from './Poliza/CreateUpdatePoliza';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class NavigatorCatalogos extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
          <View style={{flexDirection:'row'}}>
          <View>
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <IconButton icon="menu" color="#ED9A0C" size={28}/>
            </TouchableOpacity>
          </View>
          <View style = {{width:40}}>
            
          </View>
          
        </View>
      );
    }
  }

const AppNavigatorCatalogos = ({ navigation }) =>
{
    return(
            <Stack.Navigator initialRouteName="HomeCatalogos">
                <Stack.Screen name="HomeCatalogos" component={HomeCatalogos} 
                options ={{
                  title:'Catalogos', headerTitleStyle: {fontSize:17, color:'#ED9A0C'}, 
                   headerLeft: () => (<NavigatorCatalogos navigationProps={navigation}/>),
                 }}
                />
                <Stack.Screen name="CreateUpdateCliente" component={CreateUpdateCliente} 
                options={CreateUpdateCliente.navigationOptions}
                 //options={{header: () => null}} 
                />
                <Stack.Screen name="CreateUpdatePoliza" component={CreateUpdatePoliza} 
                options={CreateUpdatePoliza.navigationOptions}
                 //options={{header: () => null}} 
                />
                
            </Stack.Navigator>
    )

}

export default AppNavigatorCatalogos;