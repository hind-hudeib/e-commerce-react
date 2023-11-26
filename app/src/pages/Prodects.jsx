import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Prodects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return ( <div>
    <h1>MyComponent</h1>
    <ul>
      {data.map((item) => (


        <>  <li key={item.id}>{item.title}</li>

        <Link to ={`/d/${item.category}`}>
            More
        </Link></>
                      
      ))}
    </ul>
  </div>
  )
}

export default Prodects