import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
    ;
  }, []);

  return (
    <div>
      <h1>Welcome to your Cart!</h1>
      {
        data ? <h1>{data}</h1> : <p>Loading ....</p>
      }
    </div>
  )
}

export default Cart;