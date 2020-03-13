import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ScrollModal from './modals';
import { defaultProps } from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


export default class Fridge extends Component {
    render() {
  const [freezerOn, isFreezerOn] = useState(false);

  return (
    <View style={styles.container}>
{/* Top Row of App */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.topButtons}>
          <Text>Test </Text>
        </TouchableOpacity>
        <Image style={styles.topLogo}source={require('../../assets/logo_MyFood.png')}/>
        <TouchableOpacity style={styles.topButtons}>
          <Text>Test </Text>
        </TouchableOpacity>
      </View>
{/* First Row of Fridge */} 
        <View style={styles.fridgeGrid}>
          <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity onPress = {() => isFreezerOn(true)} style={styles.fridgeButtons}>
                <View>
                <Text style={{fontSize: 24}}>Freezer</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text style={{fontSize: 24}}>Meat</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
{/* Second Row of Fridge */} 
        <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text style={{fontSize: 24}}>Produce</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text style={{fontSize: 24}}>Non-Perishables</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
{/* Third Row of Fridge */}      
        <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text style={{fontSize: 24}}>Perishables</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
          <Text style={{fontSize: 24}}>Dairy</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        
    </View>
    <ScrollModal visible = {freezerOn}> </ScrollModal>
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
