import { useSelector } from 'react-redux'
import './App.css'
import Home from './Pages/Home'
import SingleSong from './Pages/SingleSong'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'


function App() {
  const singleSong=useSelector((state)=>state.singleSong);
  const changeTheme=useSelector((state)=>state.changeTheme);
  const imageUrl=["src/Images/minimalist-nature-7680-x-4320-6tmzrhs4fdvd5uh1.jpg","src/Images/u0gxkapolqz51.jpg","src/Images/background-app-img.png"];
  return (
    <div style={{backgroundImage:`url(${imageUrl[changeTheme.themeNum]})`,backgroundSize:'cover',backgroundPosition:'center',backgroundColor:'rgba(255, 255, 255, 0.4)',backgroundBlendMode:'lighten',backgroundAttachment:'fixed'}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/song' element={singleSong.song.title?<SingleSong/>:<Navigate replace to={"/"}/>}/>
    </Routes>
    </div>
  )
}

export default App
