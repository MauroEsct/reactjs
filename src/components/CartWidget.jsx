import React from 'react';

const CartWidget = ({ cartCount }) => {
  return (
    <div>
      <i className="bi bi-cart"></i>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;