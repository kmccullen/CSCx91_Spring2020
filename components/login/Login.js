import React from 'react';
import { StyleSheet,   
  KeyboardAvoidingView,
  Image,
  View,
  Button} from 'react-native';
import LoginForm from './LoginForm';


  const Login = props  => {

  // const someFunction = () => {console.log('ok')}

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo_MyFood.png')}/>
      </View>
      <View>
        <LoginForm />
      </View>
      <View style={{ flex : 1 }} />
    </KeyboardAvoidingView>
  );
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

export default Login;
