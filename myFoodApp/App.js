import React from 'react';
import { StyleSheet,
  Dimensions,
  View} from 'react-native';
import Login from './components/login/Login';
import Home from './components/home/Home';


export default function App() {

  const onLayout = (e)  => {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
  }

  return (
    <View style={styles.container} onLayout={onLayout.bind(this)}
    >
      <Login />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
