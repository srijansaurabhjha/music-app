import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import appLogo from '../Images/beat-music-player-2013-04-22.png'
import { Button, Tooltip } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useDispatch } from 'react-redux';
import { fetchingSongs } from '../features/songs/songListSlice';
import { Link } from 'react-router-dom';
import { setTheme } from '../features/changeTheme/changeThemeSlice';

const Header = () => {

  const [searchStr,setSearchStr]=useState("");

  const dispatch=useDispatch();

  const handleClick=()=>{
    if(!searchStr)return;
    dispatch(fetchingSongs(searchStr));
  }

  const themeChanger=()=>{
    dispatch(setTheme());
  }

  return (
    <div className='flex items-center h-16 backdrop-blur-lg mddd:flex-col mddd:h-52 '>
      <div className='flex w-1/5 justify-center mddd:mb-4 mddd:mt-4'>
        <Link to={"/"}><HomeIcon sx={{width:'3rem',height:'3rem',color:'#2D3250'}}/></Link>
        <img src={appLogo} className='w-12 ml-2 rounded-2xl'/>
      </div>
      <div className='flex w-3/5 justify-center mddd:w-full mdd:content-evenly mddd:mb-4'>
         <input placeholder='Type your Song...' className='w-3/4 mr-4 p-3 bg-transparent border-0 placeholder-black focus:outline-none text-black text-center mddd:text-start mddd:w-2/3 xss:w-7/12' onChange={(e)=>setSearchStr(e.target.value)}/>
         <Button variant='contained' onClick={handleClick}>Search</Button>
      </div>
      <div className='flex w-1/5 justify-center content-center mddd:w-full mddd:pr-4 '>
        <div className='mddds:hidden self-center font-bold mr-4 italic text-sky-950'>Change Theme</div>
        <Tooltip title='change theme'>
          <Button sx={{backgroundColor:'blue'}} variant='contained' onClick={themeChanger}><AutoAwesomeIcon/></Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default Header
