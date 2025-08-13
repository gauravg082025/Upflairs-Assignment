import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(''); // State to hold input value
  const [todos, setTodos] = useState([]); // State to hold the list of to-dos

  // Function to add a new to-do item
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput(''); // Clear input field after adding
    }
  };

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      
      {/* Input field to capture new to-do */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a to-do item"
      />
      
      {/* Button to add to-do to list */}
      <button onClick={addTodo}>Add</button>

      {/* Displaying the list of to-dos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
