import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-colitems-center justify-center min-h-screen bg-amber-500">
      <h2 className="text-3xl font-bold">Dashboard Page</h2>
      <p className="text-gray-700 mt-4 text-lg">Dashboard Content</p>
      <button
        className="cursor-pointer bg-white m-1 p-2 rounded-md hover:text-blue-400 hover:bg-gray-900 font-medium transition duration-300"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default Dashboard;
