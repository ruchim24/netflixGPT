import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        trailer:null
    },
    reducers: {
        addMovie: (state,action) => {
            state.movies = action.payload;
        },
        addTrailer: (state,action) => {
            state.trailer = action.payload;
        }
    }
});

export const { addMovie, addTrailer } = movieSlice.actions;

export default movieSlice.reducer;