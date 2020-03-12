import React, { Component } from 'react';
import { StyleSheet,   
  ScrollView,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';

  const registerFormValidation = yup.object({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required,
    username: yup.string().trim().required().min(6),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().test(function(value){
      return this.parent.password == value;
    })
  });

export default class RegisterForm extends Component {
    render() {
      return (
        <View>
          <Formik
            initialValues={{ firstname: '', lastname: '', username: '', password: '', confirmPassword: ''}}
            // validationSchema = {registerFormValidation}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {props => (
              <View style={styles.container}>
                <View style={styles.nameContainer}>
                  <TextInput
                    placeholder="Firstname"
                    placeholderTextColor="#000"
                    returnKeyType="next"
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    style={styles.firstnameContainer}
                    onChangeText={props.handleChange('firstname')}
                    value = {props.values.firstname}
                  />
                  {/* <Text>{props.errors.title}</Text> */}

                  <TextInput
                    placeholder="Lastname"
                    placeholderTextColor="#000"
                    returnKeyType="next"
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    style={styles.firstnameContainer}
                    onChangeText={props.handleChange('lastname')}
                    value = {props.values.lastname}
                  />
                </View>

                <TextInput
                  placeholder= "Username"
                  placeholderTextColor="#000"
                  returnKeyType="next"
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.input}
                  onChangeText={props.handleChange('username')}
                  value = {props.values.username}
                />
                <TextInput
                  placeholder= "Password "
                  placeholderTextColor="#000"
                  secureTextEntry
                  returnKeyType="go"
                  style={styles.input}
                  onChangeText={props.handleChange('password')}
                  value = {props.values.password}
                />
                <TextInput
                  placeholder= "Confirm Password "
                  placeholderTextColor="#000"
                  secureTextEntry
                  returnKeyType="go"
                  style={styles.input}
                  onChangeText={props.handleChange('confirmPassword')}
                  value = {props.values.confirmPassword}
                />

                <View style= {styles.button}>
                <TouchableOpacity title ="Submit" onPress={props.handleSubmit} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop: 10}}>
                  <Text style={styles.otherButtonText}>Already have an account? Sign in</Text>
                </TouchableOpacity>
                </View>

              </View >

            )}
          </Formik>
        </View>



      );
    }

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
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  firstnameContainer:{
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 20,
    color: '#000',
    paddingHorizontal: 10,
    borderWidth: 0.8,
    borderColor: '#000',
    borderRadius: 100/2,
    width: '50%'
  }

});
