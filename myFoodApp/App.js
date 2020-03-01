import React from 'react';
import { StyleSheet,   
  ScrollView,
  Text,
  Image,
  View,
  Button} from 'react-native';
  import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Login from './components/login/Login';


export default function App() {

  // const someFunction = () => {console.log('ok')}

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
