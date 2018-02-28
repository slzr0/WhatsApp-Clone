import React, {Component} from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Conversas extends Component {

  componentWillMount() {
    this.props.conversasUsuarioFetch();
    this.criaFonteDeDados(this.props.conversas);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.conversas);
  }

  criaFonteDeDados (conversas) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.fonteDeDados = ds.cloneWithRows(conversas);
  }

  renderRow(conversas){
    return (
      <TouchableOpacity
      onPress={() => Actions.conversa({ contatoNome: conversas.nome, contatoEmail: conversas.email, title: conversas.nome})}
      >
        <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}>
          <Text style={{ fontSize: 25}}>{conversas.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView 
        enableEmptySections
        dataSource={this.fonteDeDados}
        renderRow={this.renderRow}
      />
    )
  }
}

mapStateToProps = state => {

  const conversas = _.map(state.ListaConversasReducer, (val,uid) => {
    return {...val, uid}
  });

  return { conversas }
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);