import React, { useState, useEffect } from 'react'
import TvShows from '../components/TvShows'
import axios from 'axios'

const ShowPage = (props) => {
  const [showDetails, setShowDetails] = useState([])
  const [cast, setCast] = useState([])
  const showId = props.match.params.id

  const getShowDetails = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=d823df9c8122b53033fc4aa49b428224&language=en-US&page=1`
    )
    console.log(resp.data)
    setShowDetails(resp.data)
  }

  const getCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=d823df9c8122b53033fc4aa49b428224&language=en-US`
    )
    console.log(resp.data)
    setCast(resp.data.cast)
  }

  useEffect(() => {
    getShowDetails()
    getCast()
  }, [])

  return (
    <section>
      <section class="detailsSection">
        <h1>{showDetails.name}</h1>
        <img src={`http://image.tmdb.org/t/p/w154${showDetails.poster_path}`} />
      </section>
      <section class="overview">
        <h2>Overview</h2>
        <p class="overview">{showDetails.overview}</p>
      </section>
      <section class="cast">
        <h2>Cast</h2>
        <ul className="actors">
          {cast.map((actor) => {
            return (
              <li>
                {actor.name} as {actor.character}
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default ShowPage
