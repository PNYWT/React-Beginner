import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Logic for handling login can be added here
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-500">
      <h2 className="text-3xl font-bold">Home Page</h2>
      <p className="text-gray-700 mt-4 text-lg">
        Welcome to the Home Page! Explore this site to learn more.
      </p>
      <button
        className="cursor-pointer bg-white m-1 p-2 rounded-md hover:text-blue-400 hover:bg-gray-900 font-medium transition duration-300"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
