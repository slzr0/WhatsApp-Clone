import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ListView } from 'react-native';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Conversa extends Component {

  componentWillMount() {
    //console.log('id '+this.props.id);
    this.props.conversaUsuarioFetch(this.props.contatoEmail);
    this.criaFonteDeDados(this.props.conversa);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.contatoEmail != nextProps.contatoEmail) {
      this.props.conversaUsuarioFetch(nextProps.contatoEmail)
    }
    this.criaFonteDeDados(nextProps.conversa);
  }

  _enviaMensagem() {
    const { 
      mensagem,
      contatoNome,
      contatoEmail
    } = this.props;

    this.props.enviaMensagem(mensagem, contatoNome, contatoEmail)
  }

  criaFonteDeDados(conversa) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

    this.dataSource = ds.cloneWithRows(conversa);
  }

  renderRow(conversa) {

    if(conversa.tipo === "e"){
      return(
        <View style={{alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40}}>
          <Text style={{ fontSize:18, color: "#000", padding: 10, backgroundColor: "#ddf5d4", elevation: 1, borderRadius: 2 }}>{conversa.mensagem}</Text>
        </View>
      )
    }

    return(
      <View style={{alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40}}>
          <Text style={{ fontSize:18, color: "#000", padding: 10, backgroundColor: "#fff", elevation: 1, borderRadius: 2 }}>{conversa.mensagem}</Text>
        </View>
    )
  }

  render () {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={64}>

        <View style={{flex:1, backgroundColor: '#eee4dc', padding:20}}>

          <View style={{flex:1,paddingBottom: 10}}>
            <ListView 
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </View>

          <View behavior="padding" style={{flexDirection: 'row', height: 60}}>
            <TextInput 
            style={{flex: 4, backgroundColor: '#fff', fontSize: 18, borderRadius: 100, marginRight: 5, paddingHorizontal: 20}}
            placeholder="Escreva uma mensagem"
            underlineColorAndroid="rgba(0,0,0,0)"
            value={this.props.mensagem}
            onChangeText={texto => this.props.modificaMensagem(texto)}
            />
            <TouchableOpacity
              onPress={this._enviaMensagem.bind(this)}
            >
              <Image source={require('../imgs/enviar_mensagem.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
     
    )
  }
}

mapStateToProps = state => {

  const conversa = _.map(state.ListaConversaReducer.payload, (val, uid) => {
    return {...val, uid}
  });

  return({
    conversa,
    //id: state.ListaConversaReducer.id,
    mensagem: state.AppReducer.mensagem
  })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa);