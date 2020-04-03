import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Home extends Component {
render() {
  const { navigate } = this.props.navigation;

  return (
    <View style={{padding: 50, alignItems: 'center', backgroundColor: '#e0f7f3'}}>

<View style={{}}>
        <Image style= {{width: 120, height: 80}}
        source={require ('../../assets/logo_MyFood.png')}>
        </Image>
      </View>

      <View>
      <TouchableOpacity onPress={() => {alert("This will open the Profile Page");}}>
        <Image style={{width: 250, height: 250}}
        
        source={require ('../../assets/user.png')}>
        </Image>
        </TouchableOpacity>
      </View>

      <View style= {{padding: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', width: '80%'}}>

      <View>
      <TouchableOpacity onPress={() => { navigate("Fridge") }}>
        <Image style={{width: 80, height: 80}}
        source={require ('../../assets/fridge.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() => {alert("This will open the Menu Page");}}>
        <Image style={{width: 80, height: 80}}
        source={require ('../../assets/menu.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() => { navigate("Scanner") }}>
        <Image style={{width: 80, height: 80}}
        source={require ('../../assets/grocery_list.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() => {alert("This will open the Shopping Cart? Page");}}>
        <Image style={{width: 80, height: 80}}
        source={require ('../../assets/shopping_cart.png')}>
        </Image>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity onPress={() => {alert("This will open the Files? Page");}}>
        <Image style={{width: 80, height: 80}}
        source={require ('../../assets/files.png')}>
        </Image>
        </TouchableOpacity>
        </View>

      </View>
      <View style= {{padding: 20}}>
        <Text style= {{fontSize: 20, fontWeight: 'bold'}}>News Feed</Text>
      </View>

      <ScrollView style= {{height: 300, width: '100%', borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}}>
        <Text>this is a test</Text>
      </ScrollView>

    </View>
  );
}
};
