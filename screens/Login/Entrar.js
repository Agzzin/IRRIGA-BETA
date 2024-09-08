import React, {useState}from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput , TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';


export default function Entrar(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);


    const handleSubmit = () => {
      if (!email || !senha) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios!');
        return;
      }
        fetch('http://10.0.0.103/apireact/listar.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
              email: email,
              senha: senha
            }),
            mode:'cors'
          })
            .then(response => response.json())
            .then(data => {
              console.log('Resposta da API:', data);
              if (data.success) {
                const users = data.result;
                let encontrado = false;
                for (const user of users) {
                  if (user.email === email && user.senha === senha) {
                    console.log('Login realizado com sucesso!');
                    navigation.navigate('Menu');
                    encontrado = true;
                    break;
                  }
                }
                if (!encontrado) {
                  console.log('Email ou senha errados!');
                  Alert.alert(
                    'Erro',
                    'Email ou senha errados!');
                }
              } 
                else {
                console.log('Erro ao realizar login!');
              }
            })
            .catch(error => {
              console.error('Erro ao realizar solicitação:', error);
            });
      };

    return(
        <KeyboardAvoidingView style={styles.Container}>
            <Text style={styles.TxtEmail}>
                E-mail de {'\n'}usuário
            </Text>
            <TextInput style={styles.inputEmail}
            selectionColor="#fff"
            value={email}
            onChangeText={(text)=> setEmail(text)}
            />
            <Text style={styles.TxtSenha}>Senha</Text>
         <View style={styles.InputArea}>
            <TextInput style={styles.InputSenha}
            placeholder=""
            selectionColor={"#fff"}
            value={senha}
            onChangeText={(text)=> setSenha(text)}
            secureTextEntry={hidePass}
            />

            <TouchableOpacity onPress={() => setHidePass(!hidePass)} style={styles.eye}>
                {hidePass?
                <Ionicons name="eye" color="#fff" size={25}/>
                :
                <Ionicons name="eye-off" color="#fff" size={25}/>
                }
            </TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.btnAvançar} onPress={handleSubmit}><Text style={styles.txtAvançar}>Avançar</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',
    },
    TxtEmail:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:18,
        marginTop:10,
        marginBottom:10,
    },
    inputEmail:{
        marginLeft:25,
        width:'85%',
        color:'#fff'
    },

    TxtSenha:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:18,
        marginTop:10,
        marginBottom:10,
    },

    InputArea:{
        marginLeft:10,
        width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    InputSenha:{
        width:'85%',
        color:'#fff',
    },

    btnAvançar:{
        marginTop:70,
        width:'100%',
        alignItems:'center',
    },

    txtAvançar:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    }
})