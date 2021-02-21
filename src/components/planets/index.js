import React, { useState, useEffect } from 'react'
import AllPlanets from './allPlanets'
import SelectedPlanets from './selectedPlanets'
import { PopupModal } from '../modal'
import './style.css'
// api url for get Data
const PLANET_API_URL = 'https://assignment-machstatz.herokuapp.com'
// end point for get planet data
const PLANET_END_POINT = '/planet'
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
   * for show modal warning and error type
   */
  const [show, setShow] = useState(false)

  const [message, setShowMessage] = useState({
    modalHeading: '',
    modalMessage: '',
    changeIndex: 0,
  })

  const networkErrorHandler = () => {
    setShowMessage({
      modalHeading: 'Alert',
      modalMessage: 'Oops something went wrong, please try again',
      changeIndex: 'Error',
    })
    setShow(true)
  }
  /**
   * TODO: pagination, move to repository file
   * for fetch all planets data onload
   */
  const getAllPlanets = async () => {
    const responseData = await fetcher(`${PLANET_API_URL}${PLANET_END_POINT}`)
    if (responseData.status === 200) {
      const planetsData = await responseData.json()
      setAllPlanets(planetsData)
    } else networkErrorHandler()
  }

  /**
   * call api on window onLoad
   */
  useEffect(() => {
    if (!allPlanets.length) getAllPlanets()
  }, [allPlanets])

  /**
   *
   * @param {*} changeIndex if user want to confirm then successfully remove
   */
  const successUncheckFav = (changeIndex) => {
    const tempPlanet = [...allPlanets]
    tempPlanet[changeIndex].isFavourite = false
    setAllPlanets(tempPlanet)
    setShow(false)
  }

  /**
   * for show modal when user uncheck a fav planer
   */
  const uncheckFavPlanet = (availableIndex) => {
    // tempPlanet[availableIndex].isFavourite = false
    setShowMessage({
      modalHeading: 'Alert',
      modalMessage: 'Are you sure to want remove planet from favorite list',
      changeIndex: availableIndex,
    })
    setShow(true)
  }
  /**
   * for select and unselect fav icon
   */
  const favplanetHandler = (id) => {
    const tempPlanet = [...allPlanets]
    const availableIndex = tempPlanet.findIndex((planet) => planet.id === id)
    if (tempPlanet[availableIndex].isFavourite) {
      uncheckFavPlanet(availableIndex)
    } else {
      tempPlanet[availableIndex].isFavourite = true
      setAllPlanets(tempPlanet)
    }
  }

  return (
    <>
      {!allPlanets.length ? (
        <div className="loader" />
      ) : (
        <section>
          <PopupModal
            show={show}
            setShow={setShow}
            message={message}
            successUncheckFav={successUncheckFav}
          />
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
