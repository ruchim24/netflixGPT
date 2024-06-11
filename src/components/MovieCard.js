import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img 
        className=""
         alt="poster" 
         src={POSTER_URL + posterPath}
         />
    </div>
  )
}

export default MovieCard