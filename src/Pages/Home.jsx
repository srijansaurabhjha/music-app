import React from 'react'
import Header from '../Components/Header'
import SongListView from '../features/songs/SongListView'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <SongListView/>
      <Footer/>
    </div>
  )
}

export default Home
