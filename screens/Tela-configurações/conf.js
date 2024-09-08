import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Configurações(){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.perfil}>
              <Image source={require('../../assets/user-img.png')}
               style={styles.user}
              />
              <View style={styles.TxtPerfil}>
              <Text style={styles.NomeUser}>Adryan</Text>
              <Text style={styles.emailUser}>@agzzin06@gmail.com</Text>
              </View>
              </View>
             <TouchableOpacity style={styles.BtnConta}>
                <Ionicons name="lock-closed" size={24} color="white" style={styles.chave} />
                <Text style ={styles.contaTxt}>Conta {'\n'}
                    <View>
                   <Text style={styles.txtconta}>
                        Notificações de segurança, {'\n'}alterações.
                    </Text>
                    </View>
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.BtnConta}>
                <Ionicons name="trending-up" size={24} color="white" style={styles.chave} />
                <Text style ={styles.contaTxt}>Zonas de irrigação {'\n'}
                    <View>
                   <Text style={styles.txtconta}>
                           Monitore o status e o histórico, {'\n'}de cada zona.
                    </Text>
                    </View>
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.BtnConta}>
                <Ionicons name="shield-checkmark" size={24} color="white" style={styles.chave} />
                <Text style ={styles.contaTxt}>Permissões  {'\n'}
                    <View>
                   <Text style={styles.txtconta}>
                       As permissões do usuário no{'\n'}sistema
                    </Text>
                    </View>
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.BtnConta}>
                <Ionicons name="construct" size={24} color="white" style={styles.chave} />
                <Text style ={styles.contaTxt}>Preferências{'\n'}
                    <View>
                   <Text style={styles.txtconta}>
                          Personalize a irrigação de acordo {'\n'}com suas necessidades.
                    </Text>
                    </View>
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.BtnConta}>
                <Ionicons name="document-text" size={24} color="white" style={styles.chave} />
                <Text style ={styles.contaTxt}>Relatórios{'\n'}
                    <View>
                   <Text style={styles.txtconta}>
                          Os relatórios gerados pelo sistema,{'\n'}para o usuário.
                    </Text>
                    </View>
                </Text>
             </TouchableOpacity>
        </KeyboardAvoidingView>   
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    
    perfil:{
        flexDirection:'row',
        borderBottomColor:'gray',
        borderWidth:1,
        paddingBottom:10,
    },

    NomeUser:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
        marginTop:15,
        marginLeft:15,
    },

    emailUser:{
        marginLeft:12,
        color:'#fff',
        marginBottom:5,
    },

    user:{
        height:70,
        width:70,
        borderRadius:40,
        marginLeft:15,
        marginTop:13,
    },

   BtnConta:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
   },

   chave:{
    marginRight:20,
    marginLeft:20,
    color:'gray'
   },

   contaTxt:{
    fontSize:18,
    color:'#fff'
   },

   txtconta:{
    fontSize:12,
    color:'gray'
   }
})