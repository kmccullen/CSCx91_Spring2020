import React, { useState } from "react";
import { StyleSheet,   
  ScrollView,
  Text,
  Image,
  Button,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity} from 'react-native';
import Register from '../register/Register';
import Modal from "react-native-modal";
import FontAwesome, { BrandIcons, SolidIcons } from 'react-native-fontawesome';



  const LoginForm = props  => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    toggleModal = () => {
      setIsModalVisible(!isModalVisible)
     // this.setState({ isModalVisible: !this.state.isModalVisible });
    };

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
        <Text style={styles.otherButtonText} onPress={toggleModal} >SIGNUP</Text>
    </TouchableOpacity>
    <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
          <Button style={styles.cancelBtn} title="X" onPress={toggleModal} />
      {/* <FontAwesome style={{fontSize: 32}} icon={BrandIcons.github}/> */}

            <Register />
          </View>
        </Modal>
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
  },
  cancelBtn: {
    width: 15,
    backgroundColor: '#e5732c' 
  }
});

export default LoginForm;
