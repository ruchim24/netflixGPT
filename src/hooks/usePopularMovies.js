import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopular } from "../utils/Slices/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await movieData.json();
    dispatch(addPopular(data?.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default usePopularMovies;
