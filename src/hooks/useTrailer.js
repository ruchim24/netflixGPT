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

    const trailerData = data?.results?.filter((vid) => vid.type === "Trailer");
    console.log(trailerData,"ooo")
    const trailer = trailerData.length > 0 ? trailerData?.[0] : data?.results?.[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
};

export default useTrailer;
