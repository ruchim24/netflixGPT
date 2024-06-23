import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import moviesReducer from "./Slices/movieSlice";
import configReducer from "./Slices/configSlice";
import gptReducer from "./Slices/gptSlice";

const store = configureStore({
  reducer : {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
    gpt: gptReducer
  }
});

export default store;