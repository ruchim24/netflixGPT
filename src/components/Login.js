import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
        />
      </div>
      <form className="w-[30%] absolute p-12 text-white my-36 mx-auto right-0 left-0 bg-black bg-opacity-90 rounded-md">
        <h1 className="font-bold text-3xl mt-3 mb-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignIn &&  <input type="text" placeholder="Full Name" className="p-4 my-4  w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600" />}
        <input type="text" placeholder="Email Address" className="p-4 my-4  w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={() => !setIsSignIn(!isSignIn)}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
