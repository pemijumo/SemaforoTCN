import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home  from '../Home/Home';
import Authenticator from './Authenticator';
import CCliente from '../Catalogos/Cliente/CCliente';
import ClienteList from '../Catalogos/Cliente/ClienteList';

const Stack = createNativeStackNavigator();

function Navigator()
{
    return(
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="ClienteList" 
             screenOptions={{headerShown: false, }} 
             //screenOptions={{ headerMode: 'none' }} 
             options={{header: () => null}}
                    >
                <Stack.Screen name="Login" component={Authenticator} 
                 options={{header: () => null}}
                />
                <Stack.Screen name="App" component={Home} 
                 options={{header: () => null}} 
                />
                <Stack.Screen name="Cliente" component={CCliente} 
                 options={{header: () => null}} 
                />
                <Stack.Screen name="ClienteList" component={ClienteList} 
                 options={{header: () => null}} 
                />

                
                
            </Stack.Navigator>
        // </NavigationContainer>
    )

}

export default Navigator;