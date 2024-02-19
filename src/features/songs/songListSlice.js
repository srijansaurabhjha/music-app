import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialSongListState={
    loading:false,
    songs:[],
    error:""
}

export const fetchingSongs=createAsyncThunk('songList/fetchSongs',async(searchStr)=>{
    const response =await axios.request({
        method: 'GET',
        url: 'https://youtube-music-api3.p.rapidapi.com/search',
        params: {
          q: searchStr,
        },
        headers: {
          'X-RapidAPI-Key': '9ac6e0ff1dmsh9cee3dba99797a1p108214jsnffdd9c186a54',
          'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
        }
    });
    return response.data;
})

const songListSlice=createSlice({
    name:'songList',
    initialState:initialSongListState,
    extraReducers:(builder)=>{
        builder.addCase(fetchingSongs.pending,(state)=>{
            state.loading=true;
        }),
        builder.addCase(fetchingSongs.fulfilled,(state,action)=>{
           state.loading=false;
           state.songs=action.payload;
           state.error=""; 
        }),
        builder.addCase(fetchingSongs.rejected,(state,action)=>{
            state.loading=false;
            state.songs=[];
            state.error=action.error.message;
        })
    }
})

export default songListSlice.reducer;