import React from 'react'
import { Link } from 'react-router-dom'

const TvShows = (props) => {
  const { id, title } = props
  return (
    <li>
      <Link to={'/tvShows/${id}'}>
        <img src="https://placekittem.com/200/200" />
        <p>{id}</p>
      </Link>
    </li>
  )
}

export default TvShows
