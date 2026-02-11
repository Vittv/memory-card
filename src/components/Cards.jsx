import useFetchPokeAPI from "../utils/pokeAPI";
import capitalize from "../utils/helpers";

function Cards({ onCardClick }) {
  const { data, isLoading, error } = useFetchPokeAPI();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const shuffleCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5);
  };

  const shuffledData = shuffleCards(data);

  return (
    <>
      {shuffledData.map((pokemon) => (
        <button
          key={pokemon.id}
          className="card"
          onClick={() => onCardClick(pokemon.id)}
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
