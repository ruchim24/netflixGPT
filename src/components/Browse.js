import React from "react";
import Header from "./Header";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {

  useMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return(
    <div>
      <Header />;
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
};

export default Browse;
