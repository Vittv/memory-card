import { useCallback, useEffect, useState } from "react";
import capitalize from "../utils/helpers";
import useFetchPokeAPI from "../utils/pokeAPI";

function Cards({ onCardClick }) {
  const { data, isLoading, error } = useFetchPokeAPI();
  const [visibleIndices, setVisibleIndices] = useState([]);

  const shuffleVisible = useCallback(() => {
    // Generate 6 random unique indices from 0-11
    const indices = [];
    while (indices.length < 6) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    setVisibleIndices(indices);
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      shuffleVisible();
    }
  }, [data, shuffleVisible]);

  const handleClick = (pokemonId) => {
    onCardClick(pokemonId);
    shuffleVisible();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((pokemon, index) => (
        <button
          key={pokemon.id}
          className="card"
          type="button"
          onClick={() => handleClick(pokemon.id)}
          style={{ display: visibleIndices.includes(index) ? "block" : "none" }}
        >
          <h2>{capitalize(pokemon.name)}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="cardimage"
          />
        </button>
      ))}
    </>
  );
}

export default Cards;
