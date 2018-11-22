/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  } render() {
    return (
      <View style={styles.container}>

        <View style={styles.secondView}>
          <Text style={styles.welcome}>Welcome to My App !!!!</Text>
          <TextInput placeholder="Username " style={styles.textFields} />
          <TextInput placeholder="Password " style={styles.textFields} />
          <TouchableHighlight style={styles.touchable} >
            <Button title="Login" color="#fff" onPress={this._onPressButton}></Button>
          </TouchableHighlight>
        </View >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  secondView: {
    backgroundColor: 'skyblue',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  textFields: {
    marginTop: 15,
    height: 40,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  touchable: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});
