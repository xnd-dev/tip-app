import React, { useState } from 'react';
import { Alert, Image, Keyboard, SafeAreaView, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Tip from './assets/tip.png'

export default function TipApp(){
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  function calculateTip(){
    if (!billAmount || !tipPercentage) {
      Alert.alert('Digite um valor para a gorjeta e/ou para a conta');
      return;
    }

    const tip = (parseFloat(billAmount) * parseFloat(tipPercentage)) / 100;
    const total = parseFloat(billAmount) + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));

    Keyboard.dismiss();
  };

  function clearFields(){
    setBillAmount('');
    setTipPercentage('');
    setTipAmount('');
    setTotalAmount('');
  };

  return (
      <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#AD853D" />

      <Text style={styles.title}>Calculadora de Gorjeta</Text>
        <Image 
        style={styles.image}
        source={Tip} 
        alt="Imagem da gorjeta" />


        <TextInput
          style={styles.input}
          placeholder="Valor da conta"
          placeholderTextColor="#AD853D"
          keyboardType="numeric"
          value={billAmount}
          onChangeText={(text) => setBillAmount(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Porcentagem da gorjeta (%)"
          placeholderTextColor="#AD853D"
          keyboardType="numeric"
          value={tipPercentage}
          onChangeText={(text) => setTipPercentage(text)}
        />

        <TouchableOpacity style={styles.button} onPress={calculateTip}>
          <Text style={styles.buttonText}>Calcular Gorjeta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={clearFields}>
          <Text style={styles.buttonText}>Calcular Novamente</Text>
        </TouchableOpacity>

        {tipAmount !== '' && totalAmount !== '' && (
          <View>
            <Text style={styles.text}>Valor da Gorjeta: R$ {tipAmount}</Text>
            <Text style={styles.text}>Total a pagar: R$ {totalAmount}</Text>
          </View>
        )}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'contain',
    width: '70%',
    height: '30%',
    marginVertical: 32,
  },

  title: {
    color: '#AD853D',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    height: 50,
    color: '#AD853D',
    backgroundColor: '#fff',
    borderColor: '#AD853D',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 45,
    backgroundColor: '#fff',
    borderColor: '#AD853D',
    borderWidth: 1,
    borderRadius: 32,
    marginBottom: 16,
  },

  buttonText: {
    color: '#AD853D',
    textAlign: 'center',
    lineHeight: 16,
    fonSize: 16,
    fontWeight: 'bold',
  },

  text: {
    backgroundColor: '#fff',
    fontSize: 20,
    color: '#AD853D',
    padding: 8,
  },
});