import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Slices/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef?.current?.value;
    const message = checkValidData(isSignIn, email, password, name);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          src={BG_IMG}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[30%] absolute p-12 text-white my-36 mx-auto right-0 left-0 bg-black bg-opacity-85 rounded-md"
      >
        <h1 className="font-bold text-3xl mt-3 mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-800 bg-opacity-25 rounded-md border border-solid border-gray-600"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => !setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
