import React from 'react'

const VideoTitle = ({title,desc}) => {
  return (
    <div className='pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold w-1/3'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{desc}</p>
      <div>
        <button 
        className='bg-white text-black p-4 px-16 rounded-md text-lg hover:opacity-80'
        >
        <i className="fa-solid fa-play pr-2"></i>
        Play
        </button>
        <button
         className='bg-gray-700  text-white opacity-90 ml-2  p-4 px-16 rounded-md text-lg'
        >
          <i class="fa-solid fa-circle-info pr-2"></i>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle