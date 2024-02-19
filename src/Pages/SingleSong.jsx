import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SingleSongView from '../features/singleSong/SingleSongView'

const SingleSong = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <SingleSongView/>
      <Footer/>
    </div>
  )
}

export default SingleSong
