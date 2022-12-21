import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import {ItemList} from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  )
  
  const addItem = (input) => {
    setItems([...items, input])
  } 

  return (
    <div className="App">
      <h1>To do list</h1>
      <ItemList items={items} setItems={setItems} checkedState={checkedState} setCheckedState={setCheckedState}/>
      <Input addItem={addItem}/>
    </div>
  );
}

export default App;
