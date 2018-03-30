/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './Header';
import List from './List';
import ImporttantNews from './ImportantNews';

export default class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
       <Header />
       <List title='宇航员在太空宣布获奖1'/>
       <List title='宇航员在太空宣布获奖2'/>
       <List title='宇航员在太空宣布获奖3'/>
       <List title='宇航员在太空宣布获奖4'/>

       <ImporttantNews news={[
         '11111',
         '33333',
         '22222',
         '6666']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex :1
  }
  
});
