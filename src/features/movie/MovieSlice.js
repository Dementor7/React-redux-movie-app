import { createSlice } from '@reduxjs/toolkit';


export const movieslice = createSlice({
    name:"movie" ,
    initialState: {
        fantacy : [] ,
        action : [],
        adventure: [] ,
        horror:[] ,
        anime : [] ,
    } ,
    reducers: {
        FantacyMovie : ( state ,{payload} ) => {
             state.fantacy = payload
        },
        Actionmovie : (state , {payload }) => {
            state.action = payload
        },
        Adventuremovie : (state , {payload }) => {
            state.adventure = payload
        },
          Horrormovie : (state , {payload }) => {
            state.horror = payload
        },
        Animemovie : (state , {payload }) => {
            state.anime = payload
        },
    }
})




export const  { FantacyMovie , Actionmovie, Adventuremovie , Horrormovie , Animemovie } = movieslice.actions


export default movieslice.reducer 