import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formlogin extends Component {

  _autenticarUsuario() {
    const {email, senha} = this.props;
    this.props.autenticarUsuario({
      email,
      senha
    })
  }

  renderBtnAcessar() {

    if(this.props.loading_login){
      return(
        <ActivityIndicator size='large' />
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this._autenticarUsuario()} style={{ backgroundColor: '#00695C', alignItems: 'center', alignSelf: 'stretch', padding: 13, borderRadius: 2  }}>
          <Text style={{ fontSize: 18 , color: '#fff'}}>Acessar</Text>
        </TouchableOpacity>
      );
    }
  }

  render () {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
      <StatusBar
        barStyle="light-content"
      />
        <View style={{ flex: 1, padding: 10}}>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 25, backgroundColor: 'transparent', color:"#fff" }}>Zaplin</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput 
              value={this.props.email}
              underlineColorAndroid="rgba(0,0,0,0)" 
              onChangeText={texto => this.props.modificaEmail(texto)} 
              style={{ paddingLeft:10, backgroundColor: "rgba(0, 0, 0, 0.3)", marginVertical: 5, fontSize: 20, height: 45, color: '#Fff', borderRadius: 3 }} 
              placeholder="E-mail" 
              autoCapitalize="none"
              placeholderTextColor="#fff"/>
            <TextInput 
              secureTextEntry={true} 
              underlineColorAndroid="rgba(0,0,0,0)" 
              value={this.props.senha} onChangeText={texto => this.props.modificaSenha(texto)} 
              style={{ paddingLeft:10, backgroundColor: "rgba(0, 0, 0, 0.3)", marginVertical: 5, fontSize: 20, height: 45, color: '#Fff',  borderRadius: 3 }} 
              placeholderTextColor="#fff" 
              autoCapitalize="none"
              placeholder="Senha" />
            <Text style={{color:'#ff0000',fontSize: 18}}>{this.props.erroLogin}</Text>
            <TouchableOpacity onPress={() => Actions.formcadastro()}>
              <Text style={{ fontSize: 20, color: "#fff" }}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            {this.renderBtnAcessar()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loading_login: state.AutenticacaoReducer.loading_login
  }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formlogin);