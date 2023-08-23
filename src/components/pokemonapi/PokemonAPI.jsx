import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PokemonInfo from '../pokemoninfo/PokemonInfo';

function PokemonAPI({ selectedPokemon }) {
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (selectedPokemon && selectedPokemon.species) {
      setLoading(true);

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
        .then((response) => {
          setPokemonData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [selectedPokemon]);

  return (
    <div>
      {pokemonData && <PokemonInfo pokemon={pokemonData} />}
    </div>
  );
}

export default PokemonAPI;
