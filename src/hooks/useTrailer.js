import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer } from "../utils/Slices/movieSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideoData = async () => {
    const videodata = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const data = await videodata.json();

    const trailerData = data?.results?.find((vid) => vid.type === "Trailer");
    const trailer = trailerData ? trailerData : data?.results?.[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default useTrailer;
