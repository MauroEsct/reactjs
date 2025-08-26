import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container-fluid">
      <NavBar cartCount={cartCount} />
      <ItemListContainer 
        greeting="¡Hola, bienvenido a mi tienda!" 
        handleAddToCart={handleAddToCart} 
      />
    </div>
  );
}

export default App;