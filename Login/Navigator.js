import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home  from '../Home/Home';
import Authenticator from './Authenticator';
import CCliente from '../Catalogos/CCliente';

const Stack = createNativeStackNavigator();

function Navigator()
{
    return(
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="Cliente" 
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
                
                
            </Stack.Navigator>
        // </NavigationContainer>
    )

}

export default Navigator;