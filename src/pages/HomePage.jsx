import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'
import axios from 'axios'
import TvShows from '../components/TvShows'

const HomePage = (props) => {
  const [tvShows, setTvShows] = useState('')

  const getTopRatedTvShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=d823df9c8122b53033fc4aa49b428224&language=en-US&page=1'
    )
    console.log(resp.data)
    setTvShows(resp.data)
  }

  return (
    <>
      <header>
        <h1> Here are the top rated Tv Shows!</h1>
      </header>
      <main>
        <ul>
          {tvShows.map((tvShows) => {
            return <TvShows id={tvShows.id} title={tvShows.title} />
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
