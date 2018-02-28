import React from 'react';
import { Router, Scene, Stack, Schema } from 'react-native-router-flux';
import { Platform } from 'react-native';
import { Constants } from 'expo';

import FormLogin from './src/components/FormLogin';
import FormCadastro from './src/components/FormCadastro';
import BoasVindas from './src/components/BoasVindas';
import Principal from './src/components/Principal';
import AdicionarContato from './src/components/AdicionarContato';
import Conversa from './src/components/Conversa';

export default props => (

  <Router navigationBarStyle={{backgroundColor: '#075E54'}} titleStyle={{color:'#fff'}}>
    <Stack key="root">
      <Scene key='formlogin' component={FormLogin} hideNavBar/>
      <Scene key='formcadastro' component={FormCadastro} title="Cadastro" headerTintColor="#fff"/>
      <Scene key='boasvindas' component={BoasVindas} hideNavBar/>
      <Scene key='principal' component={Principal} hideNavBar/>
      <Scene key='adicionarcontato' component={AdicionarContato} title="Adicionar Contato" headerTintColor="#fff"/>
      <Scene key='conversa' component={Conversa} title="Conversa" headerTintColor="#fff"/>
    </Stack>
  </Router>
);