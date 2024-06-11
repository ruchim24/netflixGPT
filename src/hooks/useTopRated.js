import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTop } from "../utils/Slices/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await movieData.json();
    dispatch(addTop(data?.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useTopRated;
