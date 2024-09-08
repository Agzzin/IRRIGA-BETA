import React, { useState, useEffect } from "react";
import {Text,KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

 export default function NomeC({navigation}){

  const route = useRoute();
  const [nome, setNome] = useState("");
  const [error, setError] = useState(null);
  const { params } = route;
  const formData = params && params.formData;
  const [formDataState, setFormDataState] = useState(formData || {});
  const email = formData.email;
  
  const handleValidation = () => {
    console.log('Nome:', nome)
    if (!nome.trim()) {
      setError("Por favor, insira um nome");
      return false;
    }
    return true;
  };

  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData]);

  const handleSubmit = async () => {
    if (handleValidation()) {
      try {
        navigation.navigate("TelefoneC", { formData: { ...formData, nome: nome } });
      } catch (error) {
        setError(error.message);
      }
    } else {
      Alert.alert("Erro", "Por favor, insira um nome válido");
    }
  };
  
  return(
    <KeyboardAvoidingView style={styles.containerC}>
      <Text style={styles.insira}>Insira seu nome{'\n'}completo</Text>
      <TextInput style={styles.InputNome}
      selectionColor={"#fff"}
      value={nome}
      onChangeText={(text) => setNome(text)}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.InputArea}><Text style={styles.TxtAvancar}>Avançar</Text></TouchableOpacity>
    </KeyboardAvoidingView> 
  )
}

const styles = StyleSheet.create({
  containerC:{
    flex:1,
    backgroundColor:"black"
  },

  insira:{
    color:'#fff',
    fontSize:30,
    fontWeight:"bold",
    lineHeight:30,
    marginLeft:13,
    marginTop:30, 
  },

  InputNome:{
    marginLeft:25,
    marginTop:15,
    marginBottom:15,
    color:'#fff',
    fontWeight:'400',
  },

  TxtAvancar:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  },

  InputArea:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    padding:18,
    borderRadius:50,
  }
})