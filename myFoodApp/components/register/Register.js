import React, { Component } from 'react';
import { StyleSheet,   
  KeyboardAvoidingView,
  Image,
  View,
  Button} from 'react-native';

import RegisterForm from './RegisterForm';


  export default class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/logo_MyFood.png')}/>
        </View>
        <View>
          <RegisterForm />
        </View>
        <View style={{ flex : 1 }} />
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7f3'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    flexGrow: 1
  }

});
