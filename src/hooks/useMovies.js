import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addMovie } from "../utils/Slices/movieSlice";
import { useEffect } from "react";

const useMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const data = await movieData.json();
    dispatch(addMovie(data?.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useMovies;
