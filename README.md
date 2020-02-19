# How To Render Products From Your Chec Dashboard In A React App
## Display your products in any web app using this tutorial

### [Live Demo](https://commercejs-tutorial.netlify.com/)

![Preview](/src/images/store.png)

___

#### Overview
1. Set up your Chec dashboard with products
1. Fetch our product data using Chec's API
1. Display our data in your React App


#### Prerequisites
* React.js
* REST APIs
* Fetch
* Familarity with JavaScript
* SCSS/SASS


##### Built With
* React.js 
* SCSS/SASS
* Chec API
* Yarn

###### Author
[Tyler Corbett](https://tylercorbett.me/)

____

## Get Started - Create React App
 
Let's start by creating a basic project to start with. I personally love to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). But any basic project with React will work.

![React App](/src/images/react-app.png)

## Set Up Your Chec Dashboard

[Click here](https://dashboard.chec.io/login) to sign up for an account.

Once you've done that, we need two things:
1. Products to sell [Click here](https://dashboard.chec.io/products)
1. Our secret API key [Click here](https://dashboard.chec.io/setup/developer)

[Click here for help with setting up a product to sell](http://support.commercejs.com/en/articles/513221-adding-a-product)

![React App](/src/images/sandbox-key.png)

* Note: We're using our sandbox secret key for practice, if you want to set up your shop for real make sure you use the key labeled "Secret Key"

## Let's code

First let's set up our service to get the data from our Chec dashboard

```javascript
const myHeaders = new Headers();
myHeaders.append("X-Authorization", "YOUR SANDBOX API KEY HERE");
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const getProducts = fetch("https://api.chec.io/v1/products", requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error)
);
```

Now we can make use of our `getProducts` service in our app like so:
 
```javascript
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
    </div>
  );
}
```

Finally - we can map through our proucts and use any of the data we like. In this case, I make use of the image, price, name, and checkout link. Feel free to experiment with any of the data you'd like!

```javascript
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
```

Questions? [Check the support page here](http://support.commercejs.com/en)
