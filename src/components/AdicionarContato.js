import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component  {

  renderAdicionarContato(){
    if(!this.props.cadastro_resultado_inclusao) {
      return (
        <View style={{ flex: 1, padding: 10}}>
          <View>
            <TextInput
              underlineColorAndroid="rgba(0,0,0,0)"
              style={{ paddingLeft:10, marginVertical: 5, fontSize: 20, height: 45, color: '#000', }}
              placeholder="Digite o e-mail"
              placeholderTextColor="#000"
              value={this.props.adiciona_contato_email}
              onChangeText={texto => this.props.modificaAdicionaContatoEmail(texto)}
            />
            <Text style={{borderRadius: 3, color: '#F44336', fontSize: 18}}>{this.props.cadastro_resultado_txt_erro}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor: '#115e54', alignItems: 'center', alignSelf: 'stretch', padding: 13, borderRadius: 2  }}
              onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
            >
                <Text style={{ fontSize: 18 , color: '#fff'}}>Adicionar Contato</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{fontSize:20}}>Cadastro realizado com sucesso!</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 10}}>
       { this.renderAdicionarContato() }
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
  }
)

export default connect(mapStateToProps, {modificaAdicionaContatoEmail, adicionaContato})(AdicionarContato);