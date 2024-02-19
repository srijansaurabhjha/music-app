import {createSlice} from '@reduxjs/toolkit'

const initialSingleSongState={
    song:[],
}

const singleSongSlice=createSlice({
    name:"singleSong",
    initialState:initialSingleSongState,
    reducers:{
        setSong:(state,action)=>{
            state.song=action.payload
        }
    }
})

export default singleSongSlice.reducer;
export const {setSong}=singleSongSlice.actions;