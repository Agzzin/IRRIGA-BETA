import { StyleSheet, Text, View, KeyboardAvoidingView,Image,TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import React, { useEffect } from 'react';
import { useState} from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as SecureStore from 'expo-secure-store';


WebBrowser.maybeCompleteAuthSession();

const Stack = createStackNavigator();

export default function Welcome({navigation}) {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:"218004354683-ppljtradpq9p671n0v7esfu329oi6c03.apps.googleusercontent.com",
    iosClientId:"218004354683-i32bt16632oqb9jmcpss90iceetlqu28.apps.googleusercontent.com",
    androidClientId:"218004354683-hi0lbghe7je8u6nksm7greoqb7m0u247.apps.googleusercontent.com",
    redirectUri:"https://ff9a-200-106-217-98.ngrok-free.app"
  })

  React.useEffect(() =>{
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

 async function fetchUserInfo() {
  let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });
  
  const useInfo = await response.json();
  setUser(useInfo);
}

const [appleAuthAvaliable, setAppleAuthAvaliable] = useState(false);
const [userToken, setUserToken] = useState();

useEffect(() => {
  const checkAvaliable = async () => {
    const isAvaliable = await AppleAuthentication.isAvailableAsync();
    setAppleAuthAvaliable(isAvaliable);

    if(isAvaliable) {
      const credentialJson = await SecureStore.getItemAsync('apple-credentials');
      setUserToken(JSON.parse(credentialJson));
    }
  }
  checkAvaliable();
}, []);

const login = async () => {
  try{
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ]
    });
    console.log(credential);
    setUserToken(credential);
    SecureStore.setItemAsync('apple-credentials', JSON.stringify(credential));
  } catch (e) {
    console.log(e);
  }
}

const getCredentialState = async () => {
  const credentialState = await AppleAuthentication.getCredentialStateAsync(userToken.user);
  console.log(credentialState);
}

const logout = async () => {
  SecureStore.deleteItemAsync('apple-credentials');
  setUserToken(undefined);
};

const getAppleAuthContent = () => {
  if(!userToken){
    return <AppleAuthentication.AppleAuthenticationButton
    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
    cornerRadius={5}
    style={styles.button}
    onPress={login}
    />
  } else {
    const decoded = jwtDecode(userToken.identityToken);
    const current = Date.now() / 1000;
    return(
      <View>
        <Text>{decoded.email}</Text>
        <Text>Expired: {(current >= decoded.exp).toString()}</Text>
        <Button title='Sair' onPress={logout}/>
        <Button title='Obtenha o estado da credencial' onPress={getCredentialState}/>
      </View>
    )
  }
};

  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.container2}>
      <Image style={styles.logo} source={require("../../assets/logo.png")}/>
      <Text style={styles.txt}>Irrigando o futuro</Text>
      <Text style={styles.txt1}>gota a gota</Text>
    </View>
    <View style={styles.container3}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SignIN')}><Text style={styles.btnText}>Inscreva-se grátis</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btnGoogle} disabled={!request} onPress={() => {
        promptAsync();}}>
      <Image
      style={styles.lgGoogle}
      source={require("../../assets/logo-google.png")}
      /><Text style={styles.txtGoogle}>Continue com o Google</Text></TouchableOpacity>
      {
        appleAuthAvaliable
          ? getAppleAuthContent()
          : <Text style={{color:'#fff', fontWeight:'bold'}}>Autenticação Apple inválida</Text>
      }
      <TouchableOpacity style={styles.entrar} onPress={() =>navigation.navigate('Entrar')}><Text style={styles.btnEntrar}>Entrar</Text></TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2:{
    flex:1,
    alignItems:'center',
  },

  container3:{
    flex:1,
    alignItems:'center',
  },

  logo:{
    width:180,
    height:180,
    marginTop:40,
  },

  txt:{
    marginLeft:10,
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },

  txt1:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
    lineHeight:15,
  },

  btn:{
    backgroundColor:"#12520C",
    width:260,
    borderRadius:50,
    padding:18,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30,
  },

  btnText:{
    color:"#fff",
    fontSize:15,
    fontWeight:'bold',
  },

  entrar:{
    width:300,
    borderRadius:50,
    padding:18,
    alignItems:'center',
    justifyContent:'center',
  },

  btnEntrar:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },

  btnGoogle:{
    width:300,
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:30,
  },

  txtGoogle:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15,
    marginLeft:0,
    marginRight:0,
  },

  lgGoogle:{
    width:25,
    height:25,
  },

  btnApple:{
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"center",
    marginRight:15,
  },

  lgApple:{
    width:25,
    height:25,
    marginRight:0,
  },

  txtApple:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15,
  },

  button:{
    width:100,
    height:100,
  }

});

