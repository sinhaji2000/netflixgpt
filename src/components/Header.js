import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleButton = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <header className="absolute h-16 top-0 left-0 right-0 flex justify-between items-center p-5 pl-0 bg-gradient-to-t from-black z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-12 max-w-full object-contain"
      />
      {user && (
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="h-12 w-16 ml-auto pt-2 pr-2"
            alt="icon" // Add ml-auto to push the image to the right
          />

          <button onClick={handleButton}>Signout</button>
        </div>
      )}
    </header>

    // <p className="text-3xl">sadjhas</p>
  );
};
export default Header;
