import React from 'react';
import { StyleSheet,   
  ScrollView,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity} from 'react-native';


  const LoginForm = props  => {

  return (
    <View style={styles.container}>
     <TextInput 
     placeholder= "Username"
     placeholderTextColor="#000"
     returnKeyType="next"
     autoCapitalize='none'
     autoCorrect={false}
     style={styles.input}
     />
     <TextInput 
     placeholder= "Password "
     placeholderTextColor="#000"
     secureTextEntry
     returnKeyType="go"
     style={styles.input}
     />

    <View style= {styles.button}>
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{paddingTop: 20}}>
        <Text style={styles.otherButtonText}>Forget Password</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{paddingTop: 10}}>
        <Text style={styles.otherButtonText}>SIGNUP</Text>
    </TouchableOpacity>
    </View>
    
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
   padding: 50
  },
  input: {
      height: 40,
      backgroundColor: '#FFF',
      marginBottom: 20,
      color: '#000',
      paddingHorizontal: 10,
      borderWidth: 0.8,
      borderColor: '#000',
      borderRadius: 100/2,
  },
  buttonContainer: {
      backgroundColor: '#e5732c',
      paddingVertical: 15,
      width: '50%',
      borderRadius: 100/2,

  },
  buttonText: {
      textAlign: 'center',
      color: "#FFF",
      fontWeight: '700'
  },
  otherButtonText: {
    fontWeight: '700',
    color: '#504f4d'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginForm;
