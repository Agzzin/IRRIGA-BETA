import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faCloudRain, faCloud, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Slider from '@react-native-community/slider';

const Home = () => {
  const [humidityLevel, setHumidityLevel] = useState(50);
  const [climate, setClimate] = useState('cloudy');
  const [pumpStatus, setPumpStatus] = useState(false);

  const handleHumidityChange = (value) => {
    setHumidityLevel(value);
  };

  const handleClimateChange = () => {
    if (climate === 'cloudy') {
      setClimate('sunny');
    } else if (climate === 'sunny') {
      setClimate('rainy');
    } else {
      setClimate('cloudy');
    }
  };

  const handlePumpStatusChange = () => {
    setPumpStatus(!pumpStatus);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Painel</Text>
      </View>
      <View style={styles.section}>
       <View style={{alignItems:'center', justifyContent:'center'}}><Text style={styles.sectionTitle}>Nível de Umidade</Text>
       <Image source={require('../../assets/folha-icone.png')} style={{ width: 100, height: 105 }} />
       </View>
        <View style={styles.humidityContainer}>
          <FontAwesomeIcon icon={faCloudRain} size={30} color="#69F0AE" />
          <Text style={styles.humidityText}>
            {humidityLevel}%
          </Text>
          <FontAwesomeIcon icon={faSun} size={30} color="#FFC300" />
        </View>
        <Slider
          style={styles.humiditySlider}
          minimumValue={0}
          maximumValue={100}
          value={humidityLevel}
          onValueChange={handleHumidityChange}
          step={1}
          minimumTrackTintColor="#84E509"
          maximumTrackTintColor="#00ff88"
          thumbTintColor="#84E509"
        />
        <View style={styles.humidityLabels}>
          <Text style={styles.label}>Muito úmido</Text>
          <Text style={styles.label}>Perfeito</Text>
          <Text style={styles.label}>Muito seco</Text>
        </View>
      </View>
      <View style={styles.sectionsContainer}>
        <View style={styles.section1}>
          <Text style={styles.sectionTitle}>Clima</Text>
          <TouchableOpacity style={styles.climateButton} onPress={handleClimateChange}>
            {climate === 'cloudy' ? (
              <FontAwesomeIcon icon={faCloud} size={50} color="#69F0AE" />
            ) : climate === 'sunny' ? (
              <FontAwesomeIcon icon={faSun} size={50} color="#FFC300" />
            ) : (
              <FontAwesomeIcon icon={faCloudRain} size={50} color="#69F0AE" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.section2}>
          <Text style={styles.sectionTitle2}>Status da bomba</Text>
          <TouchableOpacity style={styles.pumpButton} onPress={handlePumpStatusChange}>
            <FontAwesomeIcon
              icon={pumpStatus ? faToggleOn : faToggleOff}
              size={60}
              color={pumpStatus ? '#69F0AE' : '#FFC300'}
            />
          </TouchableOpacity>
          <Text style={styles.pumpStatusText}>
              {pumpStatus ? 'Ligada' : 'Desligada'}
           </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    color: '#fff',
  },
  header: {
    marginBottom:10,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    marginTop:10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  section: {
    padding: 20,
    backgroundColor: '#7CFF00',
    marginBottom: 10,
    borderRadius:20,
  },

  section1: {
    padding: 25,
    backgroundColor: '#7CFF00',
    marginBottom: 10,
    borderRadius:0,
    flexDirection:'column',
    alignItems:'center',
  },

  section2:{
    padding: 10,
    backgroundColor: '#7CFF00',
    marginBottom: 10,
    borderRadius:0,
    flexDirection:'column',
    alignItems:'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  sectionTitle2:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:16,
  },

  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  humidityText: {
    fontSize: 24,
  },
  humiditySlider: {
    marginBottom: 10,
  },
  humidityLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
  },
  climateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#333',
    marginBottom: 10,
  },
  sectionsContainer: {
    flexDirection: 'row',
  },

  pumpButton:{
    width:100,
    height:70,
    backgroundColor:'#333',
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center'
  },

  pumpStatusText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight:'bold'
  },
});

export default Home;