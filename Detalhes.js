import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './styles';

export default function Detalhes({
  setTela,
  movimentacoes
}) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Movimentações
      </Text>

      <ScrollView>

        {movimentacoes.map(item => (

          <Text
            key={item.id}
            style={styles.info}
          >
            {item.descricao} - R$ {item.valor}
          </Text>

        ))}

      </ScrollView>

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