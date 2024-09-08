import React, { useState, useEffect } from "react";
import {TextInput, Text,KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";   
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

 export default function TelefoneC({navigation}){

  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState(null);
  const route = useRoute();
  const formData = route.params.formData;
  const [formDataState, setFormDataState] = useState({});

  useEffect(() => {
    console.log("FormData:", formData);
    setFormDataState(formData); 
  }, [formData]);

  const handleValidationTelefone = () => {
    console.log('Telefone:', telefone)
    if (!telefone.trim()) {
      setError("Por favor, insira um número de telefone");
      return false;
    }
    const telefoneRegex = /^\d{11,15}$/;
    if (!telefoneRegex.test(telefone)) {
      setError("Por favor, insira um número de telefone válido");
      return false;
    }
    return true;
  };

   const handleSubmitTelefone = async () => {
    if (handleValidationTelefone()) {
      try {
        navigation.navigate("Senha", { formData: { ...formData, telefone: telefone } });
      } catch (error) {
        setError(error.message);
      }
    } else {
      Alert.alert("Erro", "Por favor, insira um telefone válido");
    }
  };

  
  return(
    <KeyboardAvoidingView style={styles.containerC}>
      <Text style={styles.TxtNum}>Qual é o seu número{'\n'}de telefone?</Text>
      <Text style={styles.TxtPre}>(De preferência WhatsApp)</Text>
      <TextInput style={styles.InputNumero}
      selectionColor={"#fff"}
      placeholder=''
      onChangeText={(text) => setTelefone(text)}
      />
      <TouchableOpacity style={styles.BtnAvancar} onPress={handleSubmitTelefone}><Text style={styles.TxtAvancar}>Avançar</Text></TouchableOpacity>
    </KeyboardAvoidingView> 
  )
}

const styles = StyleSheet.create({
  containerC:{
    flex:1,
    backgroundColor:'#000'
  },

  TxtNum:{
    color:'#fff',
    fontSize:26,
    fontWeight:"bold",
    lineHeight:30,
    marginLeft:8,
    marginTop:30, 
  },

  TxtPre:{
    color:'#fff',
    fontSize:10,
    marginLeft:8,
    fontWeight:'500',
  },

  InputNumero:{
    marginLeft:20,
    marginTop:15,
    marginBottom:15,
    color:'#fff',
    fontWeight:'400',
  },

  BtnAvancar:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    padding:18,
    borderRadius:50,
  },

  TxtAvancar:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  }
})
