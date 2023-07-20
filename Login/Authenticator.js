// import { Button, IconButton, TextInput } from "react-native-paper"
import imgLogin from '../Imagenes/LogoTitanium.jpg'
import imgusername from '../Imagenes/username.png'
import imgpassword from '../Imagenes/password.png'
import { Button, IconButton, TextInput } from 'react-native-paper'
const React = require("react")
const { SafeAreaView, View, Text, ScrollView, Image, TouchableHighlight, TouchableOpacity } = require("react-native")

const Authenticator = () => {

    return(
       <View style={{flex: 1}}>   
            
            <View style={{flex: 2 }}>
            </View>
            <View style={{flex: 6}}>
                    <View style={{flex:1, alignItems:'center', paddingBottom:30}}>
                        <View style={{paddingLeft:50, paddingRight:50}}>
                        <Image source={imgLogin} />
                        </View>
                    </View>
                <View style={{flex:4}}>                   
                    <View style={{paddingLeft:50, paddingRight:50, paddingTop:20}}>
                        <TextInput placeholder="Usuario" returnKeyType="done" style={{borderRadius:10, paddingLeft:100, height:45}}/>
                        <Image source={imgusername} style={{ position:'absolute', top:30, left:80, zIndex:99, width:22, height:22}} />
                    </View>

                    <View style={{paddingLeft:50, paddingRight:50, paddingTop:20}}>
                        <TextInput placeholder="Contraseña" returnKeyType="done" secureTextEntry={true} style={{borderRadius:10, paddingLeft:100, height:45}}  />
                        <Image source={imgpassword} style={{ position:'absolute', top:30, left:80, zIndex:99, width:22, height:22}} />
                        <TouchableOpacity activeOpacity={0.7} style={{position:'absolute', top: 20, right: 50,}}>
                            <IconButton icon={"eye"} color="#ED9A0C" size={20}></IconButton>
                            </TouchableOpacity>
                    </View>
                    
                    <View style={{paddingLeft:50, paddingRight:50, paddingTop:30}}>
                        <TouchableOpacity>
                            <Button mode="contained"
                            >Ingresar</Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex: 3}}>
            </View>
       </View>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         //user: state.user,
//     }
// };

export default  //connect(mapStateToProps)
(Authenticator)