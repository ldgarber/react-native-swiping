import React from 'react'; 
import { StackNavigator } from 'react-navigation'; 
import SelectDeck from '../screens/SelectDeck'; 
import Swipe from '../screens/Swipe'; 

export const SwipeStack = StackNavigator({
  SelectDeck: {
    screen: SelectDeck, 
    navigationOptions: {
      title: 'Home', 
    }
  }, 
  Swipe: {
    screen: Swipe, 
    navigationOptions: {
      title: 'Swipe',  
    }
  }
})
