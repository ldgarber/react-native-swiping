import React, { Component } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 

class SelectDecks extends Component {
  onSelectDeck = () => {
    this.props.navigation.navigate('Swipe');  
  }
  render() {
    return(
      <View style={styles.container} >
        <Text onPress={() => this.onSelectDeck()}>Start swiping!</Text>
      </View>
    )
  }  
}

export default SelectDecks; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'pink', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
}); 

