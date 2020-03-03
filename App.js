import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './components/login/Login';

const App: () => React$Node = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
