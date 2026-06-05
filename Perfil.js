import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function Perfil({ setTela }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Perfil
      </Text>

      <Text style={styles.info}>
        Usuário: João Lucas
      </Text>

      <Text style={styles.info}>
        Meta de Economia: R$ 500
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela('home')}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>

    </View>
  );
}