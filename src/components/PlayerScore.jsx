function PlayerScore({ score, bestScore }) {
  return (
    <div className="playerScore">
      <h1 className="title">Pokémon Memory Game</h1>
      <div className="scoreboard">
        <p className="github">Github</p>
        <p className="score">Score: {score}</p>
        <p className="bestscore">Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default PlayerScore;
