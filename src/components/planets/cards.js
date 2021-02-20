import React from 'react'
import { Heart } from '../icons/heart'

export default function Cards({ planet, favplanetHandler }) {
  console.log('rerendered', planet.isFavourite)
  return (
    <div className="card">
      <span>{planet.name}</span>
      <span onClick={() => favplanetHandler(planet.id)}>
        <Heart className={planet.isFavourite ? 'fav-selected' : ''} />
      </span>
    </div>
  )
}
