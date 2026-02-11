import { useState } from "react";
import Cards from "./components/Cards";
import PlayerScore from "./components/PlayerScore";
import "./style/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  const handleCardClick = (pokemonId) => {
    if (clickedPokemon.includes(pokemonId)) {
      if (score > bestScore) {
        setBestScore(score);
      }

      setScore(0);
      setClickedPokemon([]);
    } else {
      setClickedPokemon([...clickedPokemon, pokemonId]);
      const newScore = score + 1;
      setScore(newScore);

      if (newScore === 12) {
        setBestScore(12);
        alert("You won!");

        setScore(0);
        setClickedPokemon([]);
      }
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <PlayerScore score={score} bestScore={bestScore} />
      </div>
      <div className="board">
        <Cards onCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default App;
