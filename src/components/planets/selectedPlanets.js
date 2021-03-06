import React from 'react'
import Cards from './cards'

/**
 *
 * @param {*} planetsData for selected as favorite list
 */

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
      {planetsData.filter((planet) => planet.isFavourite && planet).length ===
        0 && <p className="no-planet">Oop's there is no favorite planet.</p>}
    </div>
  )
}
