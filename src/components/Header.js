import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  //navigate can be called only inside router and we need onAuthStateChanged
  //at a place which is present everwhere so that at every reload we can check auth status
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);

  return (
    <div className="flex justify-between absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44 mx-20"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="user-icon"
            src={USER_AVATAR}
          />
          {user?.displayName && (
            <span className="font-bold text-white absolute top-[60px]">
              ({user.displayName})
            </span>
          )}
          <button
            onClick={handleSignOut}
            className="font-bold text-white px-2 relative top-[-8px]"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
