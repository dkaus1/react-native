import Expo from 'expo';
import React, { Component } from 'react';
import { Root, Tabs } from './config/router';

class App extends Component {
  render() {
    return <Root />;
  }
}

Expo.registerRootComponent(App);
