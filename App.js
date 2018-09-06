/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image } from 'react-native';
import Judul from'./Component/Judul';


export default class App extends Component {
  render() {
    return (
      <View>
      <Judul/>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.instructions}>Ana Yuni Zhafira </Text>
        <Text style={styles.instructions}>XI RPL 4 </Text>
        <Text style={styles.instructions}>Absen 05 </Text>
        <Image style={{width:375,height:350}}
        source={require('./anay.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
