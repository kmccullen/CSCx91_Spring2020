import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Home extends Component {
render() {
  const { navigate } = this.props.navigation;

  return (
    <View style={styles.container}>

<View style={{width: '100%', height: '5%', alignItems: 'center'}}>
        <Image style= {styles.logo}
        source={require ('../../assets/logo_MyFood.png')}>
        </Image>
      </View>

      <View style= {{width: '100%', height: '30%'}}>
      <TouchableOpacity onPress={() => {alert("This will open the Profile Page");}}>
        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        
        source={require ('../../assets/user.png')}>
        </Image>
        </TouchableOpacity>
      </View>

      <View style= {styles.iconRow}>

      <View style= {styles.iconView}>
      <TouchableOpacity onPress={() => { navigate("Fridge") }}>
        <Image style={styles.icons}
        source={require ('../../assets/fridge.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View style= {styles.iconView}>
        <TouchableOpacity onPress={() => {alert("This will open the Menu Page");}}>
        <Image style={styles.icons}
        source={require ('../../assets/menu.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View style= {styles.iconView}>
        <TouchableOpacity onPress={() => {alert("This will open the List Scanner Page");}}>
        <Image style={styles.icons}
        source={require ('../../assets/grocery_list.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View style= {styles.iconView}>
        <TouchableOpacity onPress={() => {alert("This will open the Shopping Cart? Page");}}>
        <Image style={styles.icons}
        source={require ('../../assets/shopping_cart.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View style= {styles.iconView}>
        <TouchableOpacity onPress={() => {alert("This will open the Files? Page");}}>
        <Image style={styles.icons}
        source={require ('../../assets/files.png')}>
        </Image>
        </TouchableOpacity>
        </View>

      </View>
      <View>
        <Text style= {{fontSize: 20, fontWeight: 'bold'}}>News Feed</Text>
      </View>

      <ScrollView style= {{width: '95%', borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Text>
      </ScrollView>

    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    padding: '2%', 
    alignItems: 'center', 
    backgroundColor: '#e0f7f3', 
    height: '100%',
     width: '100%'
  },

  iconRow: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'stretch', 
    width: '100%', 
    height: '15%'
  },

  iconView: {
    width: '18%',
    height: '100%',
  },

  icons: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  logo:{
    width: '10%',
    height: '100%',
    resizeMode: 'contain'
    
  }
});
