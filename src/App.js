import React, { useState, useEffect } from 'react';
import './App.scss';
import { getProducts } from './services/product';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts.then(myProducts => setProducts(myProducts.data))
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      {products && <ul>
        {products.map((product, i) => {
          console.log(product)
          return (
            <li key={i}>
              <div className="img-container">
                <img src={product.url} alt='Product'/>
              </div>
            </li>
          );
        })}
      </ul>}
    </div>
  );
}

export default App;
