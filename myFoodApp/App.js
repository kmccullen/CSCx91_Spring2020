import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,
  Dimensions,
  View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Fridge from './components/fridge/Fridge';
import Scanner from './components/scanner/Scanner';

const Stack = createStackNavigator();

export default function App() {

  const onLayout = (e)  => {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
  }

  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerLeft: null }} />
          <Stack.Screen name="Fridge" component={Fridge} />
          <Stack.Screen name="Scanner" component={Scanner} />
          </Stack.Navigator>
    </NavigationContainer>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
