import React, { useState, useEffect } from 'react';
import PokemonInfo from '../pokemoninfo/PokemonInfo'; // Ajusta la ruta según tu estructura de carpetas
import axios from 'axios';

function PokemonDetailPage({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          setPokemonDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [pokemon]);

  return (
    <div className="pokemon-detail-container">
      {pokemonDetails ? (
        <PokemonInfo pokemonDetails={pokemonDetails} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PokemonDetailPage;
