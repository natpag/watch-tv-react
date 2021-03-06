import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import ShowPage from '../pages/ShowPage'

const PosterPath = 'http://image.tmdb.org/t/p/w154'

const TvShows = (props) => {
  const { id, title, poster } = props
  return (
    <li>
      <Link to={`/tv/${id}`}>
        <img src={`${PosterPath + poster}`} />
        <p class="info">{title}</p>
      </Link>
    </li>
  )
}

export default TvShows
