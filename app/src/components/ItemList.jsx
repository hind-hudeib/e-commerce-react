import React from 'react';

const ItemList = ({ onItemHover }) => (
  <ul>
    <li onMouseEnter={() => onItemHover('Item 1')}>Item 1</li>
    <li onMouseEnter={() => onItemHover('Item 2')}>Item 2</li>
    <li onMouseEnter={() => onItemHover('Item 3')}>Item 3</li>
  </ul>
);

export default ItemList;
