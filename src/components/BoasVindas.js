import React, {Components} from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
  <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize: 32, color: '#fff', marginBottom: 30}}>Seja Bem-Vindo</Text>
        <Image source={require('../imgs/logo.png')} />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => Actions.formlogin()}
          style={{ backgroundColor: '#115e54', alignItems: 'center', alignSelf: 'stretch', padding: 13, borderRadius: 2  }}
          >
            <Text style={{ fontSize: 18 , color: '#fff'}}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);