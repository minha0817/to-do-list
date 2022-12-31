import React from 'react'
import './header.css'
import { BsFillSunFill } from 'react-icons/bs'

export default function Header({ setFilter, filters }) {
  return (
    <header>
      <span>
        <BsFillSunFill />
      </span>
      <ul>
        {filters.map((filter, index) => (
          <button key={index} onClick={() => setFilter(filter)}>
            <b>{filter}</b>
          </button>
        ))}
      </ul>
    </header>
  )
}
