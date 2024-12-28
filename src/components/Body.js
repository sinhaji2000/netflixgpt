import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const auth = require("../utils/firebase").auth;
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        console.log(uid, email);
        // ...
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  });
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
