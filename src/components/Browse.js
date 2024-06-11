import React, { useState } from "react";
import Header from "./Header";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const [toggleGptSearch, setToggleGptSearch] = useState(false);

  useMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header
        toggleGptSearch={toggleGptSearch}
        setToggleGptSearch={setToggleGptSearch}
      />
      ;{toggleGptSearch && <GptSearchPage />}
      {!toggleGptSearch && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
