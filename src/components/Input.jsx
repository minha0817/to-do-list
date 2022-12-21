import React, { useState } from "react";

export default function Input({addItem}) {

  const [input, setInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(input)
    setInput("")
  }


  return (
    <div>
      <input
        name="Add todo"
        type={"text"}
        value={input}
        placeholder="Add Todo"
        onChange={(event)=> {setInput(event.target.value)}}
      >
      </input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

