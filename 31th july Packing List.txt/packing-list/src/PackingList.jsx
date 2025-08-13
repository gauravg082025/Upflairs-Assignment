import React from 'react';

const PackingList = ({ items, togglePacked, deleteItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span 
            style={{ textDecoration: item.isPacked ? 'line-through' : 'none' }} 
            onClick={() => togglePacked(item.id)}
          >
            {item.name}
          </span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PackingList;
