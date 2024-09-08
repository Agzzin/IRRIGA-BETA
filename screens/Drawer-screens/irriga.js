import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Wifi } from 'react-native-wifi';
import { useState, useEffect } from "react";

const APP = () => {
  // Estados do componente
  const [wifiConnected, setWifiConnected] = useState(false);
  // Estado que indica se o WiFi está conectado
  const [pumpState, setPumpState] = useState(false);
  // Estado que indica se a bomba está ligada
  const [wifiInstance, setWifiInstance] = useState(null);
  // Instância do WiFi conectado

  useEffect(() => {
    // Função para conectar ao WiFi
    const handleWifiConnect = async () => {
      try {
        // Conecta ao WiFi com o ssid e password fornecidos
        const ssid = 'AGZZIN';
        const password = 'ASCII';
        const wifi = await Wifi.connect(ssid, password);
        setWifiConnected(true);
        setWifiInstance(wifi);
      } catch (error) {
        console.error(error);
      }
    };
    handleWifiConnect();
  }, []);

  // Função para toggle do estado do pump
  const handlePumpToggle = async () => {
    if (wifiConnected && wifiInstance) {
      try {
        // Define o comando para ligar ou desligar o pump
        const command = pumpState ? 'off' : 'on';
        const url = `http://${wifiInstance.IPAddress}/pump/${command}`;                                                                                               
        await fetch(url, { method: 'GET' });
        setPumpState(!pumpState);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return(
    <Irriga onTogglePump={handlePumpToggle} />
  )
}
    export default function Irriga({ onTogglePump }){
      return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.tit}><Text style={styles.txttit}>Funcionalidades</Text></View>
            <View style={styles.box1}>
               <View style={styles.boxV}>
               <Text style={styles.Horario}>Horários</Text>
               <Image source={require('../../assets/relogio.png')}
                style={styles.img1}
                />
               </View>
                <View style={styles.txtv}>
                    <Text>Nome da espécie:</Text> 
                    <Text>Melhor horário do dia:</Text>
                    <Text>Melhor horário da tarde:</Text>
                    <Text>Melhor horário da noite:</Text>
                    <Text>Temperatura do clima:</Text>
                </View>
            </View>
            <View style={styles.box2}>
               <View style={styles.boxV}>
               <Text style={styles.Horario1}>Reservatório</Text>
               <Image source={require('../../assets/fortlev.png')}
                style={styles.img2}
                />
               </View>
                <View style={styles.txtv1}>
                    <Text>Quantidade disponivel:</Text> 
                    <Text>Quantidade necessária:</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.BtnArd} onPress={onTogglePump}>
                <Text style={styles.TxtEsp}>Ligar Sistema</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:6,
        paddingRight:8,
        backgroundColor:'#000',
    },

    tit:{
        marginLeft:3,
        marginTop:30,
    },

    txttit:{
        color:'#fff',
        fontWeight:'600',
    },

    Horario:{
        color:'#000',
        fontSize:10,
        marginLeft:30,
    },

    box1:{
        backgroundColor:'#7CC472',
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    img1:{
        width:70,
        height:70,
        borderRadius:50,
        marginRight:5,
        backgroundColor:'#7CC472',
        marginTop:0,
        marginLeft:20,
    },

    txtv:{
        backgroundColor:'#fff',
        padding:8,
        borderRadius:10,
    },

    box2:{
        backgroundColor:'#CCFF2F',
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:50,
        paddingTop:15,
        paddingBottom:15,
    },

    Horario1:{
        color:'#000',
        fontSize:10,
        marginLeft:15,
    },

    txtv1:{
        backgroundColor:'white',
        padding:8,
        borderRadius:10,
    },

    img2:{
      width:75,
        height:75,
        borderRadius:50,
        marginRight:5,
        marginTop:0,
        marginLeft:20,
    },
  
    BtnArd:{
        marginTop: 60,
        alignSelf: 'center', 
        justifyContent: 'center',
        backgroundColor: '#84E509',
        borderRadius: 20,
        paddingRight:30,
        paddingLeft:30,
        paddingTop:15,
        paddingBottom:15,
    },

    TxtEsp:{
        color:'#fff',
        fontSize:13,
        fontWeight:'bold'
    },
})
