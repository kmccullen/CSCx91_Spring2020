import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Inside extends Component {

    render() {

  return (
    <View style={styles.container}>
        <Text> Inside of this part of the fridge </Text>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    backgroundColor: '#e0f7f3',
    alignItems: 'center',
  },
  topRow: {
    paddingTop: 55,
    width: '95%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topButtons: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topLogo: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain'
  },
  fridgeGrid: {
    flexDirection: 'column',
    width: '95%',
    height: '100%'
  },
  fridgeRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '25%',
    width: '100%',
  },
  fridgeButtons: {
    backgroundColor: '#9faba9',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderColor: '#504f4d',
    height: '100%',
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
  },
  rowItems: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
                                 
  }
});
