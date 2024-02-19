import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SingleSongView = () => {
  const singleSong=useSelector((state)=>state.singleSong);
  useEffect(()=>{},[singleSong])
  return (
    <div className='min-h-[calc(100vh-3rem-4rem)] flex flex-col mddd:min-h-[calc(100vh-3rem-13rem)]'>
      <div className='text-4xl font-bold self-center mt-8 text-wrap break-normal mr-4 ml-4 text-center' style={{color:'#352F44'}}>
       {singleSong.song.title}
      </div>
      <div className='self-end pr-16 text-1xl font-bold italic'>
        <span style={{color:'#393646'}}>By: </span><span style={{color:'#393646'}}>{singleSong.song.author}</span>
      </div>
      <div className='self-center mt-4 w-full flex justify-center min-h-96 xsss:min-h-72 xss:min-h-56'>
      <iframe className='w-3/6 mdd:w-4/6 mddd:w-10/12' src={`https://www.youtube.com/embed/${singleSong.song.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  )
}

export default SingleSongView
