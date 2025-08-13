import React, { useState } from 'react';
import PackingList from './PackingList';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, { id: Date.now(), name: newItem, isPacked: false }]);
    setNewItem('');
  };

  const togglePacked = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Packing List</h1>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Add new item" 
      />
      <button onClick={addItem}>Add</button>
      <PackingList 
        items={items} 
        togglePacked={togglePacked} 
        deleteItem={deleteItem} 
      />
    </div>
  );
};

export default App;
