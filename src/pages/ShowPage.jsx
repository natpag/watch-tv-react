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
    <main>
      <h1>{showId}'s page</h1>
    </main>
  )
}

export default ShowPage
