import React from 'react'
import MovieList from '../MovieList/MovieList';

let movieList = ["Avengers","Hulk","Ironman","Thor"];

const MovieApp = () => {
  return (
    <MovieList movieList={movieList} />
  )
}

export default MovieApp