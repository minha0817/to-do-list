import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

export const ItemList = ({ items, setItems, checkedState, setCheckedState }) => {

  const handleDelete = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }

  const handleCompleted = (position) => {
    console.log("position", position)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    ) 
    
    setCheckedState(updatedCheckedState);
  }

  return (
    <div>
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" checked={checkedState[index]} onChange={() => handleCompleted(index)}/>
              <span>{item}</span>
            </label>
            <button
              onClick={() => {
                handleDelete(index)
              }}
            >
              <BsTrashFill />
            </button>
          </div>
        ))}
    </div>
  )
}
