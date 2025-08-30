import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-500">
      <h2 className="text-3xl font-bold">Not Found 404</h2>
      <p className="text-gray-700 mt-4 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
