function PlayerScore({ score, bestScore }) {
  return (
    <>
      <a
        className="github"
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Vittv/memory-card.git"
      >
        <img
          src="pokemon-logo.png"
          alt="Pokémon Memory Game"
          className="logo"
        />
      </a>
      <div className="scoreboard">
        <p className="score">
          Score: <span className="scorenumber">{score}</span>
        </p>
        <p className="bestscore">
          Best Score: <span className="bestscorenumber">{bestScore}</span>
        </p>
      </div>
    </>
  );
}

export default PlayerScore;
