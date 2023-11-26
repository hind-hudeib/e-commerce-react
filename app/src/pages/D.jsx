import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const D = () => {
  const category = useParams();
  const [filteredData, setFilteredData] = useState([]);

  console.log(category);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category.s}`);
        console.log(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h1>MyComponent</h1>
      <ul>
        {filteredData.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default D;
