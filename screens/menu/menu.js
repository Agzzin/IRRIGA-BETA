import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../Drawer-screens/Perfil'
import Home from '../Drawer-screens/home-drawer';
import Suporte from '../Drawer-screens/suporte';
import SideBarContent from '../SideBar/sidebar';
import { Ionicons } from '@expo/vector-icons';
import Irriga from '../Drawer-screens/irriga';

const Drawer = createDrawerNavigator();


const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBarContent {...props}/>} initialRouteName='Home'>
      <Drawer.Screen 
        name="Perfil"
        component={Perfil} 
        options={{
          drawerIcon: ({color}) => {
            return <Ionicons name="person-outline" size={20} color={'#2EAF4A' }/>
          },
          title:'Perfil',
          drawerActiveTintColor:'#2F8C20',
          inactiveTintColor: 'gray',
          drawerLabelStyle: { color: '#fff' },
          drawerActiveTintColor:'#2EAF4A',
          inactiveTintColor: '#2EAF4A',
          drawerLabelStyle: { color: '#fff' },
          headerStyle:{
           backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => {
            return <Ionicons name="home-outline" size={20} color={'#2EAF4A'} />
          },
          focused:true,
          drawerActiveTintColor:'#2F8C20',
          inactiveTintColor: 'gray',
          drawerLabelStyle: { color: '#fff' },
          enableLayoutAnimations: true,
        }}
      />
     
      <Drawer.Screen
        name='Suporte'
        component={Suporte}
        options={{
          drawerIcon: ({color}) => {
            return <Ionicons name="help-outline" size={20} color={'#2EAF4A'} />
          },
          drawerActiveTintColor:'#2F8C20',
           inactiveTintColor: 'gray',
           drawerLabelStyle: { color: '#fff' },
        }}
      />

      <Drawer.Screen
        name='Irriga'
        component={Irriga}
        options={{title:'Irrigação',
          drawerIcon: ({color}) => {
            return <Ionicons name="leaf-outline" size={20} color={'#2EAF4A'} />
          },
          drawerActiveTintColor:'#2F8C20',
           inactiveTintColor: 'gray',
           drawerLabelStyle: { color: '#fff' },
           drawerActiveTintColor:'#2EAF4A',
           inactiveTintColor: '#2EAF4A',
           drawerLabelStyle: { color: '#fff' },
           headerStyle:{
            backgroundColor: '#000',
           },
           headerTintColor: '#fff',
           headerTitleAlign:'center',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;