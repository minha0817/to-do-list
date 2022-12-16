import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

export const ItemList = ({ items, setItems }) => {

  const handleDelete = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }


  return (
    <div>
      {items.length > 0 && items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
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
