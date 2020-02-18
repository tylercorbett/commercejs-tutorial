import React, { useState, useEffect } from 'react';
import './App.scss';
import { getProducts } from './services/product';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts.then(myProducts => setProducts(myProducts.data))
  }, []);
  console.log(products, 'products');
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
