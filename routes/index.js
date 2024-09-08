import { createStackNavigator } from "@react-navigation/stack";
import Welcome from'../screens/Welcome'
import Senha from "../screens/SignIn/senha";
import Entrar from "../screens/Login/Entrar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Configurações from "../screens/Tela-configurações/conf";
import AppNavigator from "../screens/menu/menu";
import SignIn from '../screens/SignIn/';
import NomeC from '../screens/SignIn/nome';
import TelefoneC from '../screens/SignIn/telefone';
import Menu from '../screens/menu/menu'

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="SignIN"
            component={SignIn}
            options={{title:'Criar conta',
                headerStyle:{
                    backgroundColor:'black'
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Senha"
            component={Senha}
            options={{title:'Criar conta',
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Entrar"
            component={Entrar}
            options={{title:'',
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Configurações"
            component={Configurações}
            options={{title:'Configurações',
            headerStyle:{
                backgroundColor:'black'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
                textAlign:'center',
                justifyContent:'center',
            },
            headerTitleAlign:'center'
          }}
            />

            <Stack.Screen
            name="NomeC"
            component={NomeC}
            options={{title:'Criar Conta',
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="TelefoneC"
            component={TelefoneC}
            options={{title:'Criar Conta',
                
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
             <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}
