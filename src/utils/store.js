import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/movieSlice";
import configReducer from "./Slices/configSlice";

const store = configureStore({
  reducer : {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer
  }
});

export default store;