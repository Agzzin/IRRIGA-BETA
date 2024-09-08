import React, { useEffect, useState } from "react";
import { View,TextInput, Text,KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";   
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";


 export default function EmailC({navigation}){

  const route = useRoute();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const { params } = route;
  const formData = params && params.formData;
  const [formDataState, setFormDataState] = useState(formData || {});

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      setError("Por favor, insira um e-mail válido");
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
        navigation.navigate("NomeC", { formData: { ...formData, email: email } });
      } catch (error) {
        setError(error.message);
      }
    } else {
      Alert.alert("Erro", "Por favor, insira um e-mail válido");
    }
  };

  return(
    <KeyboardAvoidingView style={styles.containerC}>
      <Text style={styles.TxtC}>Qual é o seu{'\n'}e-mail?</Text>
      <TextInput style={styles.InputEmail}
      selectionColor={"#fff"}
      placeholder=''
      value={email}
      onChangeText={(text) => setEmail(text)}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      />
      <Text style={styles.Txtconfirm}>Você vai ter que confirmar esse e-mail mais
      {'\n'}tarde.</Text>
      <TouchableOpacity style={styles.BtnAvancar} onPress={handleSubmit}><Text style={styles.TxtAvancar}>Avançar</Text></TouchableOpacity>
      {error && <Text style={styles.TxtError}>{error}</Text>}
    </KeyboardAvoidingView> 
  )
}

const styles = StyleSheet.create({
  containerC:{
    flex:1,
    backgroundColor:'black',
  },

  TxtC:{
    color:'#fff',
    fontSize:35,
    fontWeight:"bold",
    lineHeight:35,
    marginTop:55,
    marginLeft:13, 
   },

   InputEmail:{
    marginLeft:25,
    marginTop:15,
    marginBottom:15,
    color:'#fff',
    fontWeight:'400',
    
   },

   Txtconfirm:{
    color:'#fff',
    fontWeight:'600',
    fontSize:12,
    marginLeft:13,
    marginBottom:20,
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
   },

})
  