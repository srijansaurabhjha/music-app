import {configureStore} from '@reduxjs/toolkit'
import songListReducer from '../features/songs/songListSlice'
import singleSongReducer from '../features/singleSong/singleSongSlice'
import changeThemeReducer from '../features/changeTheme/changeThemeSlice';

const store =configureStore({
    reducer:{
        songList:songListReducer,
        singleSong:singleSongReducer,
        changeTheme:changeThemeReducer,
    }
});

export default store