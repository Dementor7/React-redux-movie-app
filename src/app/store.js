import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from "../features/movie/MovieSlice"

export const store = configureStore({
  reducer: {
    movies : MovieReducer ,
  },
});
