import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from './app/components/SwipeCards'; 
import { SwipeStack } from './app/config/router'; 

export default class App extends React.Component {
  render() {
    return <SwipeStack />; 
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
