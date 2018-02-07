'use strict'; 

import React, { Component } from 'react'; 
import {StyleSheet, Text, View, Image} from 'react-native'; 

import SwipeCards from 'react-native-swipe-cards'; 

class Card extends React.Component {
  constructor(props){
    super(props);  
  }

  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    ) 
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
} 

export default class extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      cards: [
        {text: 'Blah', backgroundColor: '#ffeeff'}, 
        {text: 'Hello', backgroundColor: 'pink'}
      ] 
    }; 
  } 

  handleYup (card) {
    console.log(`Yup for ${card.text}`) 
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`) 
  }
  onLoop (card) {
    console.log(`Looping`) 
  }
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        dragY={false}
        
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        onLoop={this.onLoop}
      />
    ) 
  }
}
  
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center', 
    borderRadius: 5, 
    overflow: 'hidden', 
    elevation: 1, 
    alignItems: 'center', 
    width: 300, 
    height: 300, 
  }, 
  noMoreCardsText: { 
    fontSize: 22,  
  }
})

