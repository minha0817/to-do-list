import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './input.css'

export default function Input({ addItem }) {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    if (input.trim().length === 0) {
      return
    }
    event.preventDefault()
    addItem({ id: uuidv4(), input, status: 'active' })
    setInput('')
  }

  return (
    <form className="form">
      <input
        className="input"
        name="Add todo"
        type={'text'}
        value={input}
        placeholder="Add Todo"
        onChange={(event) => {
          setInput(event.target.value)
        }}
      ></input>
      <button className="form-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}
