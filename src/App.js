import React, { useState, useEffect } from 'react';
import './App.scss';
import { getProducts } from './services/product';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts.then(myProducts => setProducts(myProducts.data));
  }, []);

  return (
    <div className="App">
      <h1>My Store</h1>
      {products && <section>
        {products.map((product, i) => {
          console.log(product);
          return (
            <div className="product" key={i}>
              <div className="name-price">
                <span className="name">
                  {product.name}
                </span>
                <span className="price">
                  {product.price.formatted_with_symbol}
                </span>
              </div>
              <div className="img-container">
                <img src={product.media.source} alt='Product'/>
              </div>
              <a className="buy-now" href={product.checkout_url.checkout} rel="noopener noreferrer" target="_blank">
                Buy Now
              </a>
            </div>
          );
        })}
      </section>}
    </div>
  );
}

export default App;
