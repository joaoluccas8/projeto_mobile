import React, { useState } from 'react';

import Login from './Login';
import Home from './Home';
import Perfil from './Perfil';
import Config from './Config';
import Detalhes from './Detalhes';

export default function App() {

  const [tela, setTela] = useState('login');

  const [movimentacoes] = useState([
    {
      id: 1,
      descricao: 'Salário',
      valor: 2500
    },
    {
      id: 2,
      descricao: 'Faculdade',
      valor: -229.42
    },
    {
      id: 3,
      descricao: 'Vivo',
      valor: -45
    },
    {
      id: 4,
      descricao: 'Internet',
      valor: -100
    }
  ]);

  switch (tela) {

    case 'home':
      return (
        <Home
          setTela={setTela}
          movimentacoes={movimentacoes}
        />
      );

    case 'perfil':
      return <Perfil setTela={setTela} />;

    case 'config':
      return <Config setTela={setTela} />;

    case 'detalhes':
      return (
        <Detalhes
          setTela={setTela}
          movimentacoes={movimentacoes}
        />
      );

    default:
      return <Login setTela={setTela} />;
  }
}

