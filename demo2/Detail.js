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
  NavigatorIOS
} from 'react-native';




export default class extends React.Component {

    render() {
      return (
        <ScrollView style={styles.flex}>
         <Text style={styles.list_item_font}>
          这里是详情页
          </Text>
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