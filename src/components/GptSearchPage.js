import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20 -mt-6">
        <img  src={BG_IMG} alt="bg" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
