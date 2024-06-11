import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        trailer:null,
        popularmovies:null,
        toprated:null,
        upcoming:null
    },
    reducers: {
        addMovie: (state,action) => {
            state.movies = action.payload;
        },
        addPopular: (state,action) => {
            state.popularmovies = action.payload;
        },
        addTop: (state,action) => {
            state.toprated = action.payload;
        },
        addUpcoming: (state,action) => {
            state.upcoming = action.payload;
        },
        addTrailer: (state,action) => {
            state.trailer = action.payload;
        }
    }
});

export const { addMovie, addTrailer, addPopular, addTop, addUpcoming } = movieSlice.actions;

export default movieSlice.reducer;