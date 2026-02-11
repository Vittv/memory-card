import { useEffect, useState } from "react";
import { pokemonList } from "../data/pokeList";

function useFetchPokeAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch first 12 Pokémon from list
        const promises = pokemonList.slice(0, 12).map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
            (res) => {
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              return res.json();
            },
          ),
        );

        const results = await Promise.all(promises);
        setData(results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}

export default useFetchPokeAPI;
