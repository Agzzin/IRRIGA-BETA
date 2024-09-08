import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';


const SideBarContent = ({ navigation,...props }) => (
    <ScrollView style={{backgroundColor:"#000"}}>
        <ImageBackground
        source={require('../../assets/fundo-verde.png')}
        style={{width: undefined, padding:16, paddingTop:45,}}
        >    
        <Image source={require('../../assets/user-img.png')} style={styles.profile}/>
        <Text style={styles.name}>Adryan</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.email}>agzzin06@gmail.com</Text>
            <Feather name="user" size={13} color="#fff" />
        </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerItemList {...props} navigation={navigation} />
        </View>
        <View style={{padding:20, borderTopWidth:1, borderTopColor:"#2EAF4A", marginTop:'20%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')}style={{flexDirection:'row',}}>
                <Ionicons name='settings-outline' size={20} style={styles.settings}/>
                <Text style={styles.settingstxt}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{flexDirection:'row'}}>
                <Ionicons name='log-out-outline' size={20} style={styles.sair}/>
                <Text style={styles.sairtxt}>Sair</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
    const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        profile: {
            width:80,
            height:80,
            borderRadius:40,
            borderWidth:2,
            borderColor:'#fff',
        },
    
        name:{
            color:"#fff",
            fontSize:18,
            fontWeight:'700',
            marginVertical:8,
            marginLeft:0
        },
    
        email:{
            color:"rgba(255, 255, 255, 0.8)",
            fontSize:13,
            marginRight:4,
        },
    
        settings:{
            color:"#2EAF4A",
            marginRight:9,
            marginBottom:20,
        },
        settingstxt:{
            color:"#fff"
        },
    
        sair:{
            color:"#2EAF4A",
            marginRight:9,
        },
    
        sairtxt:{
            color:"#fff"
        }
    })
    
    export default SideBarContent;    