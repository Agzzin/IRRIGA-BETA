import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet ,KeyboardAvoidingView, TextInput} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Senha(){
    const navigation = useNavigation();
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true)
    const [error, setError] = useState(null);
    const route = useRoute();
    const { formData } = route.params;
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
          console.log('Senha:', senha);
          const dadosUsuario = {
            ...formData,
            Senha: senha,
            Email: formData.email,
            NomeCompleto: formData.nome,
            Telefone: formData.telefone,
          };
          console.log('Dados usuário:', dadosUsuario);
          const response = await axios.post('http://10.0.0.103/apireact/cadastro.php', dadosUsuario, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response.status);
          console.log(response.data);
      
          if (response.status === 200) {
            navigation.navigate('Menu');
          } else {
            setError(response.statusText);
            Alert.alert('Erro', response.statusText);
          }
        } catch (error) {
          console.log(error.message);
          setError(error.message);
          Alert.alert('Erro', error.message);
        } finally {
          setLoading(false);
        }
      };

    return(
        <KeyboardAvoidingView style={styles.Container}>
            <Text style={styles.TxtCrie}>Crie uma senha</Text>
            <View style={styles.InputArea}>
                <TextInput style={styles.input}
                 placeholder=""
                 selectionColor={"#fff"}
                 placeholderTextColor={"#fff"}
                 value={senha}
                 onChangeText={(texto) => setSenha(texto) }
                 secureTextEntry={hidePass}
                />
                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    { hidePass ?
                    <Ionicons name="eye" color="#fff" size={25} style={styles.icon}/>
                    :
                    <Ionicons name="eye-off" color="#fff" size={25}/>
                    }

                </TouchableOpacity>
            </View>
            <Text style={styles.TxtUse}>Use pelo menos 10 caracteres.</Text>
            <TouchableOpacity style={styles.BtnAvancar} onPress={handleSubmit}><Text style={styles.txtAvancar}>Avançar</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',
    },
    TxtCrie:{
        color:'#fff',
        fontSize:27,
        fontWeight:"bold",
        lineHeight:35,
        marginTop:55,
        marginLeft:13, 
    },

    InputArea:{
        flexDirection:"row",
        width:'95%',
        backgroundColor:'black',
        borderRadius:5,
        alignItems:'center',
    },

    input:{
        width:'85%',
        height:50,
        color:'#fff',
        marginLeft:20,
    },

    icon:{
        justifyContent:'center',
        alignItems:'center',
    },

    TxtUse:{
        color:'#fff',
        fontSize:13,
        fontWeight:'600',
        marginLeft:13,
    },

    BtnAvancar:{
        width:'100%',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },

    txtAvancar:{
        fontWeight:'bold',
        fontSize:16,
        color:'#fff'
    }
});