import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const PosterPath = 'http://image.tmdb.org/t/p/w154'

const TvShows = (props) => {
  const { id, title, poster } = props
  return (
    <li>
      <Link to={`/tvShows/${id}`}>
        <img src={`${PosterPath + poster}`} />
        <p>{title}</p>
      </Link>
    </li>
  )
}

export default TvShows
