
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
  
   show (title){
     alert(title);
   }

    render (){
      var todayNews = [];
      var newList = this.props.news;
      for(var i in newList){
          var text = (
           <Text  onPress={this.show.bind(this, newList[i])}
                  numberOfLines={2}
                  style={styles.list_item}>
               {newList[i]}
              </Text>);
              todayNews.push(text);
      }
      return (
        <View style={styles.flex}>
         <Text >今日要闻</Text>
         {todayNews}
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