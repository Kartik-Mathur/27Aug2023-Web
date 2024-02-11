import React from 'react'
import Movie from '../Movie/Movie'

const MovieList = ({movieList}) => {
  return (
    movieList.map(movie=> <Movie movie={movie} />)
  )
}

export default MovieList