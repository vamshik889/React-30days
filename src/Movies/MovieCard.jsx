import React from 'react'

const MovieCard = ({title,rating,poster}) => {
  return (
    <div>
        <img src={poster} alt='movie'/>
        <h4>{title}</h4>
        <p>{rating}</p>
    </div>
  )
}

export default MovieCard