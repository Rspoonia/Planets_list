import React from 'react'
import Cards from './cards'

export default function SelectedPlanets({ planetsData, favplanetHandler }) {
  return (
    <div className="itme-list">
      <span>Favorite Planets</span>
      {planetsData.map(
        (planet) =>
          planet.isFavourite && (
            <Cards
              planet={planet}
              favplanetHandler={favplanetHandler}
              key={planet.id}
            />
          )
      )}
    </div>
  )
}
