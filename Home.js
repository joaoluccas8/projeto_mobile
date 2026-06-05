import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function Home({
  setTela,
  movimentacoes
}) {

  const saldo = movimentacoes.reduce(
    (total, item) => total + item.valor,
    0
  );

  const receitas = movimentacoes
    .filter(item => item.valor > 0)
    .reduce((total, item) => total + item.valor, 0);

  const despesas = movimentacoes
    .filter(item => item.valor < 0)
    .reduce((total, item) => total + item.valor, 0);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Controle Financeiro
      </Text>

      <Text style={styles.info}>
        Saldo: R$ {saldo.toFixed(2)}
      </Text>

      <Text style={styles.info}>
        Receitas: R$ {receitas.toFixed(2)}
      </Text>

      <Text style={styles.info}>
        Despesas: R$ {Math.abs(despesas).toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela('detalhes')}
      >
        <Text style={styles.textoBotao}>
          Ver Gastos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela('perfil')}
      >
        <Text style={styles.textoBotao}>
          Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela('config')}
      >
        <Text style={styles.textoBotao}>
          Configurações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setTela('login')}
      >
        <Text style={styles.textoBotao}>
          Sair
        </Text>
      </TouchableOpacity>

    </View>
  );
}