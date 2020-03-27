import React, { Component } from 'react';
import { StyleSheet,   
  KeyboardAvoidingView,
  Image,
  View,
  Button} from 'react-native';
import LoginForm from './LoginForm';


  export default class Login extends Component {
  render() { 
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/logo_MyFood.png')}/>
        </View>
        <View>
            <LoginForm navigation={this.props.navigation} />
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
    marginTop: 100,
    flexGrow: 1
  }
});
