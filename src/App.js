import './App.css';
import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useCardContext } from './ContextProvider';

function App() {
  const { 
    selectedCard,
    playerOneHand,
    playerTwoHand,
    playerThreeHand,
    deck,
  } = useCardContext();

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand}
        // to={to} player={1} hand={playerOneHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} 
        />
        <Player player={2} hand={playerTwoHand}
        // to={to} player={2} hand={playerTwoHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} 
        />
        <Player player={3} hand={playerThreeHand} 
        // to={to} player={3} hand={playerThreeHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} 
        />
        <CardList cards={deck} player={'deck'}
        // cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} 
        />
      </section>
      <section>
        {
          selectedCard && 
          <ExecutePassButton 
            // passCard={passCard} from={from} to={to} selectedCard={selectedCard} 
          />
        }
      </section>
    </div>
  );
}

export default App;
