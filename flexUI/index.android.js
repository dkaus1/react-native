/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Pin from './app/components/Pin'

export default class flexUI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pin />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('flexUI', () => flexUI);
