import {createSlice} from '@reduxjs/toolkit'

const initialThemeState={
    themeNum:0,
}

const chnageThemeSlice=createSlice({
    name:'changeTheme',
    initialState:initialThemeState,
    reducers:{
        setTheme:(state)=>{
            state.themeNum=(state.themeNum+1)%3;
        }
    }
})

export default chnageThemeSlice.reducer;
export const {setTheme}=chnageThemeSlice.actions;