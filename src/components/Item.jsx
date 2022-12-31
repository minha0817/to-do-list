import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import './item.css'

export default function Item({ index, item, handleDelete, handleUpdate }) {
  const { input, status } = item

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    handleUpdate({ ...item, status })
  }

  const handleChecked = () => {
    if (status === 'completed') {
      return 'checked-item'
    }
    if (status === 'active') {
      return null
    }
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={status === 'completed'}
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className={handleChecked()}>
          {input}
        </label>
      </div>
      <button
        className="trashbutton"
        onClick={() => {
          handleDelete(index)
        }}
      >
        <BsTrashFill />
      </button>
    </li>
  )
}
