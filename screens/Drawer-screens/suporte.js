import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Suporte = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuda</Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.icon}>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
        </View>
        <Text style ={styles.optionText}>Conta {'\n'}
                    <View>
                   <Text style={styles.optionDescription}>
                        Central de ajuda, {'\n'}obtenha ajuda.
                    </Text>
                    </View>
                </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.icon}>
          <Ionicons name="document-text-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.optionText}>Termos e Política de Privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.icon}>
          <Ionicons name="alert-circle-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.optionText}>Denúncias de canais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.icon}>
          <Ionicons name="information-circle-outline" size={24} color="#fff" />
        </View>
        <Text style={styles.optionText}>Dados do app</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#111',
    borderRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Suporte;