import React from 'react';
import Card from './Card';
import { useCardContext } from './ContextProvider';

export default function ExecutePassButton() {
  const {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from,
    to,
    
  } = useCardContext();

  function findCardIndex(value, suit, cards) {
    return cards.findIndex(card => card.value === value && card.suit === suit);
  }

  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];
    
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;
    
    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;
    
    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);
    
    toHand.push(cardToMove);
    
    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);
    
    setSelectedCard();
  }
  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
