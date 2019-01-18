import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }
  //sets the initial set of Data for the component
  componentDidMount() {
    this.setState({tabs: tabData, cards: cardData});
  }

  //changes the tab based on which displayed tab the user clicks on
  changeSelected = tab => {
    this.setState({selected: tab});
  };

  //filters the cards based on which tab is selected by the user
  filterCards = () => {
   let newCards = cardData;//grabs the card data 
   if(this.state.selected === 'all'){//if the tab selected is all return all of the cardData
     return newCards;
   } else {
     return newCards.filter(card => this.state.selected === card.tab);// if a tab other than all is selected filter the cards based on that tabs name
   }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
