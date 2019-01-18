import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
        return <Card card={card} key={index} />
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default Cards;