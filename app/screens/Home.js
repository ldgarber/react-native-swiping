import React, { Component } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import NewDeckArea from '../components/NewDeckArea'; 
import SelectDecks from '../components/SelectDecks'; 

class Home extends Component {
  render() {
    return(
      <View style={styles.container}> 
        <NewDeckArea navigation={this.props.navigation}/>
        <SelectDecks navigation={this.props.navigation}/>
      </View>
    ) 
  }
}

export default Home; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
