import React from "react";
import Header from "./Header";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useMovies();

  return(
    <div>
      <Header />;
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
};

export default Browse;
