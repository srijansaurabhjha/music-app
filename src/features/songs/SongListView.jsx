import { Avatar, CircularProgress, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSong } from '../singleSong/singleSongSlice';
import { useNavigate } from 'react-router-dom';

const SongListView = () => {
  const songList=useSelector((state)=>{return state.songList});

  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
  },[songList])

  const handleClick=(s)=>{
    dispatch(setSong(s));
    navigate("/song");
  }

  return (
    <div className='min-h-[calc(100vh-3rem-4rem)] mddd:min-h-[calc(100vh-3rem-13rem)]'>
      {songList.loading&&<CircularProgress />}
      {!songList.loading&&songList?.songs?.result?.length>0?(
        <Stack spacing={4} sx={{marginTop:'2rem',marginBottom:'2rem'}}>
          {songList.songs.result.map((s)=>(
               <div onClick={(e)=>handleClick(s)} key={s.videoId} className='flex p-4 backdrop-blur-sm w-11/12 self-center rounded-xl cursor-pointer' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div className='w-1/6 flex items-center justify-center mdd:w-3/12 mddd:w-4/12 xsss:w-5/12'>
                 <Avatar src={s.thumbnail} sx={{width:'6rem',height:'6rem','@media(max-width:450px)':{width:'4rem',height:'4rem'}}}/>
                </div>
                <div className='flex flex-col w-5/6 justify-evenly mdd:w-9/12 mddd:w-8/12 xsss:justify-between xsss:7/12'>
                  <div className='font-bold text-2xl line-clamp-1 xsss:text-xl' style={{color:'#2D3250'}}>{s.title}</div>
                  <div className='flex justify-between'>
                    <div className='text-base line-clamp-1 xsss:text-xs flex'><span className='text-violet-950 line-clamp-1 mr-2'>By: </span><span className='font-medium line-clamp-1' style={{color:'#393646'}}>{s.author}</span></div>
                    <div className='pr-8 text-white line-clamp-1 xsss:pr-0'>{s.duration}</div>
                  </div>
                </div>
               </div>
          ))}
        </Stack>
      ):null}
    </div>
  )
}

export default SongListView
