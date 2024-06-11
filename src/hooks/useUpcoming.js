import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer, addUpcoming } from "../utils/Slices/movieSlice";
import { useEffect } from "react";

const useUpcoming = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideoData = async () => {
    const videodata = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    );
    const data = await videodata.json();

    dispatch(addUpcoming(data?.results));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default useUpcoming;
