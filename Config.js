import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function Config({ setTela }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Configurações
      </Text>

      <Text style={styles.info}>
        Limite mensal: R$ 2000
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