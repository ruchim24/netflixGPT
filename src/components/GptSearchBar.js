import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utils/language';

const GptSearchBar = () => {
    const lang_dd = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
        <form  className="w-1/2 bg-black grid grid-cols-12">
            <input
              type="text"
              className="p-4 m-4 col-span-9"
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