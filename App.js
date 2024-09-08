import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Routes from "./routes"
import { useEffect, useState } from "react";
import axios from "axios";

function API() {
  const [Lista, setLista] = useState([])  
  const [Email, setEmail] = useState('')  
  const [Nome, setNome] = useState('')  
  const [Telefone, setTelefone] = useState('')  
  const [Senha, setSenha] = useState('')  
  const [Id, setId] = useState('')
    
  useEffect(() => {
    listarDados();
  },[])

  async function listarDados(){
    const res = await axios.get('http://10.0.0.103/apireact/listar.php');
    setLista(res.data);
    console.log(res.data);
  }

  return {
    Lista,
    Email,
    Nome,
    Telefone,
    Senha,
    Id,
    listarDados
  }
}

export default function App(){

  const api = API();

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}




