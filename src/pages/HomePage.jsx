import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HelloWorld from '../components/HelloWorld'
import axios from 'axios'
import TvShows from '../components/TvShows'
import ShowPage from '../pages/ShowPage'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  const [featured, setFeatured] = useState([])

  const getTvShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=d823df9c8122b53033fc4aa49b428224&language=en-US&page=1'
    )
    console.log(resp.data)
    setTvShows(resp.data.results)

    const randomPick = Math.floor(Math.random() * 20)
    setFeatured(resp.data.results[randomPick])
  }

  useEffect(() => {
    getTvShows()
  }, [])
  return (
    <>
      <h1>TOP RATED SHOWS!</h1>
      <h1>Show of the week!</h1>
      <section>
        <Link to={`/tv/${featured.id}`}>
          <section class="featuredSection">
            <img
              src={`http://image.tmdb.org/t/p/w154${featured.poster_path}`}
            />
            <p>{featured.original_name}</p>
          </section>
        </Link>
      </section>
      <h1> Here are the top rated Tv Shows!</h1>
      <main>
        <section>
          <ul>
            {tvShows.map((tvShow) => {
              return (
                <TvShows
                  key={tvShow.id}
                  id={tvShow.id}
                  title={tvShow.original_name}
                  poster={tvShow.poster_path}
                />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default HomePage
