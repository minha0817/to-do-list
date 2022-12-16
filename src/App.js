import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import {ItemList} from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (input) => {
    setItems([...items, input])
  } 

  return (
    <div className="App">
      <h1>To do list</h1>
      <ItemList items={items} setItems={setItems}/>
      <Input addItem={addItem}/>
    </div>
  );
}

export default App;
