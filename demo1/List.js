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
  PixelRatio
} from 'react-native';




export default class extends React.Component {
  show(title){
    alert(title);
  }
    render() {
      return (
        <View style={styles.list_item}>
         <Text  onPress={this.show.bind(this ,this.props.title)}
          style={styles.list_item_font}>
          {this.props.title}
          </Text>
        </View>
      );
    }
  }


  var styles = StyleSheet.create({
    flex:{
       flex:1
      },
    list_item: {
       height:40,
       marginLeft:10,
       marginRight:10,
       borderBottomWidth:1,
       borderBottomColor:'#ddd',
       justifyContent:'center'
    },
    list_item_font:{
        fontSize:16
    }

  });