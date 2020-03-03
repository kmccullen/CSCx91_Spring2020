import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
{/* Top Row of App */}
      <View style={styles.topRow}>
        <Text style={styles.topButtons}> Test</Text>
        <Image style={styles.topLogo}source={require('./assets/images/logo_MyFood.png')}/>
        <Text style={styles.topButtons}>Test</Text>
      </View>
{/* First Row of Fridge */} 
        <View style={styles.fridgeGrid}>
          <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
{/* Second Row of Fridge */} 
        <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
{/* Third Row of Fridge */}      
        <View style={styles.fridgeRow}>
            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rowItems}>
              <TouchableOpacity style={styles.fridgeButtons}>
                <View>
                <Text>Test</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    backgroundColor: '#e0f7f3',
    alignItems: 'center'
  },
  topRow: {
    paddingTop: 55,
    width: '95%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topButtons: {
    fontSize: 20
  },
  topLogo: {
    width: 200,
    height: 80,
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
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderColor: '#504f4d',
    height: '100%',
    width: '100%',
    borderRadius: 6
  },
  rowItems: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
