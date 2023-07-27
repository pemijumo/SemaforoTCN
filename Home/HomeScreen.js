import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
 import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import Home from './Home'
import { IconButton } from 'react-native-paper';
import CustomSidebarMenu from './CustomSidebarMenu'
import AppNavigatorCatalogos from '../Catalogos/NavigatorCatalogos';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

class HomeScreen extends Component {
  
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      // console.disableYellowBox = true; 
      return (
        <View style={{flexDirection:'row'}}>
          <View >
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
              <IconButton icon="menu" color="#ED9A0C" size={28}/>
            </TouchableOpacity>
          </View>
          <View style = {{width:50}}>
          </View>
        </View>
      );
    }
  }



const Home_StackNavigator = ({ navigation }) =>
{
  return (
        <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} 
                options ={{
                   title:'Titanium CN'
                   , headerTitleStyle: {fontSize:17}, 
                      headerLeft: () => (<HomeScreen navigationProps={navigation}/>),
                    //  headerRight: () => (<IconButton icon="power" size={28}  
                
                    //  color="#ED9A0C"
                    // />),
                  }}
                />
                <Stack.Screen name="Home2" component={Home} options={{header: () => null}} />
        </Stack.Navigator>
  );
}

const Page2_StackNavigator = ({ navigation }) =>
{
  return (
        <Stack.Navigator>
                <Stack.Screen name="AppNavigatorCatalogos" component={AppNavigatorCatalogos} 
                options={{header: () => null}}
                />
        </Stack.Navigator>
  );
}



const DrawerNavigator = () =>
{
  return (
    
    <Drawer.Navigator
    screenOptions ={{ activeTintColor: '#e91e63', itemStyle: {marginVertical: 5}  }}
    
    drawerContent={(props) => <CustomSidebarMenu {...props} />}

    //initialRouteName = {(props) => props.route[0]._NameMenuActivo}
    >
        <Drawer.Screen name="Screen1" component={Home_StackNavigator} options={{ header: () => null}} />
        <Drawer.Screen name="Screen2" component={Page2_StackNavigator} options={{ header: () => null}} />
         {/*<Drawer.Screen name="Screen3" component={Page3_StackNavigator} options={{ header: () => null}} />
        <Drawer.Screen name="Screen4" component={Page4_StackNavigator} options={{ header: () => null}} />
        <Drawer.Screen name="Screen5" component={Page5_StackNavigator} options={{ header: () => null}} />
        <Drawer.Screen name="Screen6" component={Page6_StackNavigator} options={{ header: () => null}} /> */}

    </Drawer.Navigator>
  
  );
}
export default (DrawerNavigator)

// export default (Home_StackNavigator)
