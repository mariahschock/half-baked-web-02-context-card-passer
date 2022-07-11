import React from 'react';
import Card from './Card';
import { useCardContext } from './ContextProvider';

export default function CardList() {
  const { deck, setSelectedCard, player, setFrom, selectedCard } = useCardContext();
  return (
    <div className='card-list'>
      {
        deck.map((card => <Card 
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
