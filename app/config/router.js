import React from 'react'; 
import { StackNavigator } from 'react-navigation'; 
import Home from '../screens/Home'; 
import Swipe from '../screens/Swipe'; 
import NewDeck from '../screens/NewDeck'; 

export const SwipeStack = StackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
      title: 'Home', 
    }
  }, 
  NewDeck: {
    screen: NewDeck,  
    navigationOptions: {
      title: 'New Deck',  
    }
  }, 
  Swipe: {
    screen: Swipe, 
    navigationOptions: {
      title: 'Swipe',  
    }
  }
})
