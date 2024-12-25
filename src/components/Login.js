import Header from "./Header";
import React from "react";

const LoginIn = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="Background"
        />
      </div>
      <form
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded"
        style={{
          top: "4rem",
          border: "2px solid rgba(128, 128, 128, 0.5)", // Transparent grayish border
          width: "350px",
          height: "350px", // Fixed width
          padding: "1.5rem", // Reduced padding to control height
          margin: "auto", // Center horizontally
        }}
      >
        <h1 className="text-2xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="mb-3 p-2 w-full rounded border border-gray-300 text-black"
            type="text"
            placeholder="Name"
            required
          />
        )}
        <input
          className="mb-3 p-2 w-full rounded border border-gray-300 text-black"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="mb-3 p-2 w-full rounded border border-gray-300 text-black"
          type="password"
          placeholder="Password"
          required
        />
        <button
          className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white font-bold"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 m-4 " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a member? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default LoginIn;
