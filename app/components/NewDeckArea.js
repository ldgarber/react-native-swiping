import React, { Component } from 'react'; 
import { StyleSheet, View, Text } from 'react-native' 

class NewDeckArea extends Component {
  onNewDeck = () => {
    this.props.navigation.navigate('NewDeck');  
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=> this.onNewDeck()}>New Deck here</Text> 
      </View>
    ) 
  }
}

export default NewDeckArea; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffeeff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
}); 

