import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';

class TabBarMenu extends Component {

  platform() {
    if(Platform.OS === 'ios'){
      return(
        <View style={styles.statusBar} />
      );
    }
  }

  render () {
    return (
      <View style={styles.nav}>
        {this.platform()}
        <View style={styles.header}>

          <View style={styles.headerL}>
            <Text style={styles.txtHeader}>Zaplin</Text>
          </View>

          <View style={styles.headerR}>
            <View style={styles.btnAddContato}>
              <TouchableOpacity onPress={() => {Actions.adicionarcontato(); this.props.habilitaInclusaoContato()}}>
                <Image source={require('../imgs/adicionar-contato.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.txtSair}>Sair</Text>
            </View>
          </View>

        </View>
        <TabBar {...this.props} style={styles.tabBar}/>
      </View>
    );
  }
}

export default connect(null, {habilitaInclusaoContato})(TabBarMenu);


const styles = StyleSheet.create({
  txtSair:{
    fontSize: 18,
    color: '#fff'
  },
  btnAddContato:{
    width: 50,
    alignItems: 'center'
  },
  headerR: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  statusBar: {
    //ios
    backgroundColor: "#06443d",
    height: Constants.statusBarHeight,
  },
  nav: {
    backgroundColor: '#075E54',
    elevation:4,
    marginBottom:6
  },
  headerL: {
    justifyContent: 'center',
  },
  txtHeader: {
    color:'#fff',
    fontSize: 20
  },
  tabBar: {
    backgroundColor: '#075E54',
    elevation: 0
  }
});