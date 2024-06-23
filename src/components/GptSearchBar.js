import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/language';
import openai from '../utils/openai';
import { options } from '../utils/constants';
import { addGptMovieResult } from '../utils/Slices/gptSlice';

const GptSearchBar = () => {
    const [searchValue,setSearchValue] = useState("");

    const dispatch = useDispatch();

    const lang_dd = useSelector((store) => store.config.lang);


    const handleMovies = async (movie) => {
      const moviedata = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,options);
      const data = await moviedata.json();
      return data?.results;
    }
   
    const handleSubmit = async (e) => {
      e.preventDefault();

      const gptQuery = "Act as a Movie Recommendation System and suggest moveis for the query" + searchValue + "only give me names of 5 movies, comma separated like the example result given ahead: Elemental, Golmaal, You, After, Gaddar";

      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(gptResults.choices);

      const movies = ["Andaz Apna Apna","Golmaal","Crew","Elemental","Frozen"];
      const allMovies =  movies.map((movie) => handleMovies(movie));
      const finaldata = await Promise.all(allMovies);
      dispatch(addGptMovieResult({movieNames: movies, movieResults: finaldata}));
    }

  return (
    <div className="pt-[10%] flex justify-center">
        <form  className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) =>handleSubmit(e)}>
            <input
              type="text"
              className="p-4 m-4 col-span-9"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={lang[lang_dd].placeholder}
            />
            <button
            className="py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-md"
            >
                {lang[lang_dd].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar