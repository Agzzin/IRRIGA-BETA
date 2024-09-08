import React, {useState} from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil(){

  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');


    return(
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.logo}>
          <Image source={require('../../assets/user-img.png')}
            style={styles.user}
            />
            <Image source={require('../../assets/lapis.png')}
            style={styles.lapis}
            />
          </View>
          <View style={styles.form1}>
            <TextInput style={styles.input1}
            placeholder="Nome"
            selectionColor='#fff'
            placeholderTextColor="#ccc"
            fontSize={12}
            value={nome}
            onChangeText={(text) => setNome(text)}

            />
          </View>  
          <View style={styles.form2}>  
            <TextInput style={styles.input2}
            placeholder="E-mail"
            selectionColor='#fff'
            placeholderTextColor="#ccc"
            fontSize={12}
            value={email}
            onChangeText={(text) => setEmail(text)}
            secureTextEntry={hidePass1}
            />
              <TouchableOpacity onPress={() => setHidePass1(!hidePass1)} style={styles.eye}>
                {hidePass1?
                <Ionicons name="eye" color="ccc" size={25}/>
                :
                <Ionicons name="eye-off" color="#ccc" size={25}/>
                }
            </TouchableOpacity>
          </View>  
          <View style={styles.form3}>  
            <TextInput style={styles.input3}
            placeholder="Senha"
            selectionColor='#fff'
            placeholderTextColor="#ccc"
            fontSize={12}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={hidePass}
            />
              <TouchableOpacity onPress={() => setHidePass(!hidePass)} style={styles.eye}>
                {hidePass?
                <Ionicons name="eye" color="ccc" size={25}/>
                :
                <Ionicons name="eye-off" color="#ccc" size={25}/>
                }
            </TouchableOpacity>
          </View>  
        

          <View style={styles.Btn}>
            <TouchableOpacity style={styles.BtnCon}><Text style={styles.BtnTxt}>Alterar</Text></TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color:'#fff',
    alignItems:'center',
  },

  logo:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
  },

  user:{
    width:80,
    height:80,
    marginTop:10,
  },

  lapis:{
    width:20,
    height:20,
    marginTop:75,
  },

  form1:{
    paddingLeft:7,
    flexDirection:'row',
    marginTop:40,
    alignItems:'center',
    borderWidth: 1, // adiciona uma borda de 1 pixel
    borderColor: '#7CC472', // define a cor da borda como branca
    borderRadius: 20,
    width:210,
    height:40,
  },

  input1:{
    alignItems:'center',
    color:'#fff',
    width:170,
    paddingLeft:10,
  },

  form2:{
    flexDirection:'row',
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1, // adiciona uma borda de 1 pixel
    borderColor: '#7CC472', // define a cor da borda como branca
    borderRadius: 20,
    width:210,
    height:40,
  },

  input2:{
    alignItems:'center',
    color:'#fff',
    width:170,
    paddingLeft:10,
  },

  form3:{
    flexDirection:'row',
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1, // adiciona uma borda de 1 pixel
    borderColor: '#7CC472', // define a cor da borda como branca
    borderRadius: 20,
    width:210,
    height:40,
  },

  input3:{
    alignItems:'center',
    color:'#fff',
    width:170,
    paddingLeft:10,
  },

  eye:{
    justifyContent:'center',
    alignItems:'center',
    width:30,
  },

  Btn:{
    marginTop:50,
  },

  BtnCon:{
    alignSelf: 'center', 
    justifyContent: 'center',
    backgroundColor: '#84E509',
    padding:13,
    borderRadius:50,
    width:150,
    alignItems:'center',
    justifyContent:'center',
  },

  BtnTxt:{
    color:'#fff',
    fontWeight:'600',
  }
});