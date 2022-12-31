import React, { useState } from "react";
import "./App.css";
import "../src/components/Header/header.css"
import ItemList from "./components/ItemList";
import Header from "./components/Header/Header"
const filters = ["all", "active", "completed"];

function App() {

  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} filters={filters} />
      <ItemList filter={filter}/>
    </div>
  );
}

export default App;
