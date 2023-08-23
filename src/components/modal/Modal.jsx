import React from 'react';
import './Modal.css'; // Ajusta la ruta según la ubicación de tu archivo CSS

function Modal({ children, onClose }) {
  const handleContentClick = (e) => {
    // Evitar que se propague el clic al fondo oscuro
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
