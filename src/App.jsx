import { useSelector } from 'react-redux'
import './App.css'
import Home from './Pages/Home'
import SingleSong from './Pages/SingleSong'
import { Navigate, Route, Routes } from 'react-router-dom'
import img1 from '/minimalist-nature-7680-x-4320-6tmzrhs4fdvd5uh1.jpg';
import img2 from '/u0gxkapolqz51.jpg';
import img3 from '/background-app-img.png';


function App() {
  const singleSong=useSelector((state)=>state.singleSong);
  const changeTheme=useSelector((state)=>state.changeTheme);
  const imageUrl=[img1,img2,img3];
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
