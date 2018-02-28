import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formcadastro extends Component {

  _cadastraUsuario(){
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({
      nome,
      email,
      senha
    });
  }

  renderBtnCadastrar() {

    if(this.props.loading_cadastro){
      return (
        <ActivityIndicator size='large' />
      );
    } else {
      return (
        <TouchableOpacity
        onPress={() => this._cadastraUsuario()}
        style={{ backgroundColor: '#115e54', alignItems: 'center', alignSelf: 'stretch', padding: 13, borderRadius: 2  }}
        >
          <Text style={{ fontSize: 18 , color: '#fff'}}>Cadastrar</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10}}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
            value={this.props.nome}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={texto => this.props.modificaNome(texto)}
            style={{ paddingLeft:10, backgroundColor: "rgba(0, 0, 0, 0.3)", marginVertical: 5, fontSize: 20, height: 45, color: '#Fff', borderRadius: 3 }}
            placeholder="Nome"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            />
            <TextInput
            value={this.props.email}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={texto => this.props.modificaEmail(texto)}
            style={{ paddingLeft:10, backgroundColor: "rgba(0, 0, 0, 0.3)", marginVertical: 5, fontSize: 20, height: 45, color: '#Fff', borderRadius: 3 }}
            placeholder="E-mail"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            />
            <TextInput
            secureTextEntry
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.props.senha}
            onChangeText={texto => this.props.modificaSenha(texto)}
            style={{ paddingLeft:10, backgroundColor: "rgba(0, 0, 0, 0.3)", marginVertical: 5, fontSize: 20, height: 45, color: '#Fff', borderRadius: 3 }}
            placeholder="Senha"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            />
            <Text style={{borderRadius: 3, color: '#F44336', fontSize: 18}}>{this.props.erroCadastro}</Text>
          </View>
          <View style={{ flex: 2 }}>
            {this.renderBtnCadastrar()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loading_cadastro: state.AutenticacaoReducer.loading_cadastro
  }
);

export default connect(mapStateToProps, {modificaNome, modificaEmail, modificaSenha, cadastraUsuario})(formcadastro);