import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/movieSlice";

const store = configureStore({
  reducer : {
    user: userReducer,
    movies: moviesReducer,
  }
});

export default store;