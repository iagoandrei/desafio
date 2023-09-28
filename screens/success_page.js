import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import SuccessImage from '../assets/success.png';


const styles = {
  title: {
    fontFamily: 'Roboto',
    fontSize: 33,
    fontWeight: '700',
    lineHeight: 38,
    letterSpacing: 0.8,
    textAlign: 'left',
    marginTop: 40
  },
  buttonContainer: {
    width: 338,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  successImage: {
    marginTop: 60,
    width: 215,
    height: 215
  }
};

export default function SuccessPage({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
    }}>
      <Text style={styles.title}>Chave PIX associada com sucesso a sua conta!</Text>
      
      <Image
        source={SuccessImage}
        style={styles.successImage}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}