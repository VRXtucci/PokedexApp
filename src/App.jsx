import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/pokemoncard/PokemonCard';
import PokemonDetailPage from "./components/pokemondetailpage/PokemonDetailPage";

function App() {
  const [firstGenPokemons, setFirstGenPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        setFirstGenPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <div className="pokemon-cards">
        {firstGenPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>
      {selectedPokemon && <PokemonDetailPage pokemon={selectedPokemon} />}
    </div>
  );
}

export default App;
