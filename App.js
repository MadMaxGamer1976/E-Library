import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './Components/BottomTabNavigator';
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import * as Font from 'expo-font'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }
  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />
    }
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
