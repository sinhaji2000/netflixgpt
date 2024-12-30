import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constant";
//
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleButton = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut");
      })
      .catch((error) => {
        console.error("Error during sign-out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        console.log("User signed in:", uid, email);
        dispatch(addUser({ uid, email }));
        navigate("/browse");
      } else {
        console.log("User signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <header className="absolute h-16 top-0 left-0 right-0 flex justify-between items-center p-5 pl-0 bg-gradient-to-t from-black z-10">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="h-12 max-w-full object-contain"
      />
      {user && (
        <div>
          <img
            src={USER_LOGO}
            className="h-12 w-16 ml-auto pt-2 pr-2"
            alt="icon"
          />
          <button onClick={handleButton}>Signout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
