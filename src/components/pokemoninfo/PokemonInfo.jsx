import React from 'react';
import Chip from '@mui/material/Chip';
import PokemonTypes from '../pokemontypes/PokemonTypes';
import './PokemonInfo.css';

function PokemonInfo({ pokemonDetails }) {
  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const abilities = pokemonDetails.abilities.map((ability) => ability.ability.name).join(', ');

  return (
    <div className="pokemon-info-container">
      <h2>{pokemonDetails.name}</h2>
      <div className="pokemon-detail">
        <div className="pokemon-image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
            alt={pokemonDetails.name}
          />
          <button className="shiny-image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonDetails.id}.png`}
              alt={`${pokemonDetails.name} Shiny`}
            />
          </button>
          <div className="types">
            {pokemonDetails.types && pokemonDetails.types.map((x) => (
              <Chip
                key={x.type.name}
                label={x.type.name}
                sx={{ backgroundColor: PokemonTypes[x.type.name] }}
                variant="outlined"
              />
            ))}
          </div>
        </div>
        <div className="pokemon-stats">
          <div className="stats">
            <h3>HP: {pokemonDetails.stats[0].base_stat}</h3>
            <h3>Attack: {pokemonDetails.stats[1].base_stat}</h3>
            <h3>Defense: {pokemonDetails.stats[2].base_stat}</h3>
            <h3>Speed: {pokemonDetails.stats[5].base_stat}</h3>
            <h3>Sp Atk: {pokemonDetails.stats[3].base_stat}</h3>
            <h3>Sp Def: {pokemonDetails.stats[4].base_stat}</h3>
          </div>
          <div className="additional-info">
            <h2>Profile</h2>
            <div className="info-group">
              <div>
                <h3>Height:</h3>
                <p>{pokemonDetails.height / 10} m</p>
              </div>
              <div>
                <h3>Weight:</h3>
                <p>{pokemonDetails.weight / 10} kg</p>
              </div>
              <div>
                <h3>Catch Rate:</h3>
                <p>{pokemonDetails.base_experience}%</p>
              </div>
            </div>
            <div className="info-group">
              <div>
                <h3>Gender Ratio:</h3>
                <p>{pokemonDetails.gender_ratio}% ♂ {100 - pokemonDetails.gender_ratio}% ♀</p>
              </div>
              <div>
                <h3>Abilities:</h3>
                <p>{abilities}</p>
              </div>
            </div>
            <div className="info-group">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
