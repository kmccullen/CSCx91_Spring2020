import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './header';
import ItemsContainer from './itemsContainer';
import BasketContainer from './basket';
import Footer from './footer';

export default class ShoppingCart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <BasketContainer />
        <Footer />
      </View>

    );
  }
}