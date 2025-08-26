import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <NavBar cartCount={cartCount} />
      <ItemListContainer handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;