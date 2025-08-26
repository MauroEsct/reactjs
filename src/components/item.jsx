import React from 'react';

const Item = ({ nombre, precio, image, description, handleAddToCart }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${precio}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Item;