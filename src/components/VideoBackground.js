import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const trailerId = useSelector((store) => store.movies?.trailer);


  return (
    <div className="-mt-12">
      <iframe
        className="w-screen aspect-video [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        src={"https://www.youtube.com/embed/" + trailerId?.key +  "?autoplay=1&&mute=1&&si=C4-gIsH3PasucsnG"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
