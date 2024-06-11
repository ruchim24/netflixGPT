import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowplaying = movies?.movies;
  const toprated = movies?.toprated;
  const popular = movies?.popularmovies;
  const upcoming = movies?.upcoming;

  return (
    <div className='bg-black'>
      <div className="-mt-52 pl-12 relative">
      <MovieList title="Now Playing" movies={nowplaying}/>
      <MovieList title="Top Rating" movies={toprated}/>
      <MovieList title="Popular" movies={popular}/>
      <MovieList title="Upcoming" movies={upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer