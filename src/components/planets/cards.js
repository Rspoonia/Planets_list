import React from 'react'
import { Heart } from '../icons/heart'

export default function Cards({ planet, favplanetHandler }) {
  return (
    <div className="card">
      <span>{planet.name}</span>
      <span onClick={() => favplanetHandler(planet.id)}>
        <Heart
          className={planet.isFavourite ? 'fav-selected' : 'fav-no-selected'}
        />
      </span>
    </div>
  )
}
