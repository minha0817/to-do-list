import React, { useState } from 'react'
import Input from './Input'
import Item from './Item'
import './itemList.css'

export default function ItemList({ filter }) {
  const [items, setItems] = useState([
    { id: '123', input: 'get groceries', status: 'active' },
    { id: '124', input: 'coding', status: 'active' },
  ])

  const handleDelete = (index) => {
    items.splice(index, 1)
    setItems([...items])
  }

  const handleUpdate = (updated) => {
    setItems(items.map((item) => (item.id === updated.id ? updated : item)))
  }

  const addItem = (input) => {
    setItems([...items, input])
  }

  const getFilteredItems = (items, filter) => {
    if (filter === 'all') {
      return items
    } else {
      return items.filter((item) => item.status === filter)
    }
  }

  const filtered = getFilteredItems(items, filter)

  return (
    <section>
      <ul>
        {filtered.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            index={index}
          />
        ))}
      </ul>
      <Input addItem={addItem} items={items} setItems={setItems} />
    </section>
  )
}
