import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import styles from './styles';

export default function Login({ setTela }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {

    if (usuario === 'admin' && senha === '1234') {
      setTela('home');
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha incorretos'
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Controle Financeiro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}