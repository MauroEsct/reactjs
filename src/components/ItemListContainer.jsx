import React from 'react';
import products from '../data/products';
import Item from './Item';

const ItemListContainer = ({ handleAddToCart }) => {
  return (
    <div className="container mt-4">
      <h2>Nuestros Granos de Café</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <Item
              nombre={product.nombre}
              precio={product.precio}
              image={product.image}
              description={product.description}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;