import React, { useState, useEffect } from 'react'
import AllPlanets from './allPlanets'
import SelectedPlanets from './selectedPlanets'

import './style.css'
// api url for get Data
const PLANET_API_URL = 'https://assignment-machstatz.herokuapp.com/'
// end point for get planet data
const PLANET_END_POINT = 'planet'
// for call an api using window.fetch
const fetcher = window.fetch.bind(window)

export default function Planets() {
  /**
   * for store all the planets
   */
  const [allPlanets, setAllPlanets] = useState([])
  /**
   * for track user which planet is seeing
   */
  const [isFavPlanet, setPlanetType] = useState(false)

  /**
   * TODO: we can implement pagination
   * for fetch all planets data onload
   */
  const getAllPlanets = async () => {
    const responseData = await fetcher(`${PLANET_API_URL}${PLANET_END_POINT}`)
    const planetsData = await responseData.json()
    setAllPlanets(planetsData)
  }

  /**
   * call api on window onLoad
   */
  useEffect(() => {
    if (!allPlanets.length) getAllPlanets()
  }, [allPlanets])

  /**
   * for select and unselect fav icon
   */
  const favplanetHandler = (id) => {
    const tempPlanet = [...allPlanets]
    const availableIndex = tempPlanet.findIndex((planet) => planet.id === id)
    tempPlanet[availableIndex].isFavourite
      ? (tempPlanet[availableIndex].isFavourite = false)
      : (tempPlanet[availableIndex].isFavourite = true)
    setAllPlanets(tempPlanet)
  }

  return (
    <>
      {!allPlanets.length ? (
        <div className="loader" />
      ) : (
        <section>
          <div className="action-buttons">
            <div>
              <button
                onClick={() => setPlanetType(false)}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                All Planets
              </button>
              <button onClick={() => setPlanetType(true)}>
                Favorite Planets
              </button>
            </div>
          </div>
          <div>
            {!isFavPlanet ? (
              <AllPlanets
                planetsData={allPlanets}
                favplanetHandler={favplanetHandler}
              />
            ) : (
              <SelectedPlanets
                planetsData={allPlanets}
                favplanetHandler={favplanetHandler}
              />
            )}
          </div>
        </section>
      )}
    </>
  )
}
