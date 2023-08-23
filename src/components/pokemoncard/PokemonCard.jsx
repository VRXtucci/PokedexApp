import React, { useState } from 'react';
import './PokemonCard.css';
import Modal from '../modal/Modal';
import PokemonDetailPage from '../pokemondetailpage/PokemonDetailPage';

function PokemonCard({ name, imageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="pokemon-card">
      <div className="card-content" onClick={toggleModal}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <PokemonDetailPage pokemon={{ name }} />
        </Modal>
      )}
    </div>
  );
}

export default PokemonCard;
