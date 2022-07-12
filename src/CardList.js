import React from 'react';
import Card from './Card';
import { useCardContext } from './ContextProvider';

export default function CardList({ cards, player }) {
  const { setSelectedCard, setFrom, selectedCard } = useCardContext();
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}
