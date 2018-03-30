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
  View,
  PixelRatio,
  ScrollView,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Detail from './Detail';


export default class extends React.Component {
  

     render() {
      return (
        <ScrollView style={styles.flex}>
         <Text style={styles.list_item_font} onPress={this.onPress}>
          豪华游轮北京3日游
          </Text>
          
          <Text style={styles.list_item_font} onPress={this.onPress}>
          豪华游轮海南3日游
          </Text>
          <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </ScrollView>
      );


    

    }
    
  
  }



  var styles = StyleSheet.create({
    flex:{
       flex:1
      },
    list_item: {
       flex:1,
       marginTop:64,
       marginLeft:10,
       marginRight:10,
       borderBottomWidth:1,
       borderBottomColor:'#ddd',
    },
    list_item_font:{
        fontSize:16,
        height:44
    }

  });