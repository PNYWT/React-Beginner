import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const topic = searchParams.get("topic") || "general";
  const page = searchParams.get("page") || "1";

  const urlParams = new URLSearchParams(window.location.search);
  console.log(
    "URLSearchParams:",
    urlParams.get("topic"),
    urlParams.get("page")
  );

  const handleParams = (newTopic: string, newPage: string) => {
    setSearchParams({ topic: newTopic, page: newPage });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-500">
      <h2 className="text-3xl font-bold">About Page</h2>
      <p className="text-gray-700 mt-4 text-lg">
        Welcome to the About Page! Explore this site to learn more.
      </p>

      <nav>
        <ul className="flex justify-center space-x-6 my-4">
          <Link
            to="team"
            className="cursor-pointer bg-white m-1 p-2 rounded-md hover:bg-gray-900 hover:text-blue-400 font-medium transition duration-300"
          >
            Our Team
          </Link>
          <Link
            to="/"
            className="cursor-pointer bg-white m-1 p-2 rounded-md  hover:bg-gray-900 hover:text-blue-400 font-medium transition duration-300"
          >
            Back to home
          </Link>
        </ul>
      </nav>

      <div>
        <ul className="flex justify-center space-x-6 my-4">
          <button
            className="cursor-pointer bg-white m-1 p-2 rounded-md hover:bg-gray-900 hover:text-blue-400 font-medium transition duration-300"
            onClick={() => handleParams("team", "1")}
          >
            Team
          </button>
          <button
            className="cursor-pointer bg-white m-1 p-2 rounded-md  hover:bg-gray-900 hover:text-blue-400 font-medium transition duration-300"
            onClick={() => handleParams("mission", "1")}
          >
            Mission
          </button>

          <button
            className="cursor-pointer bg-white m-1 p-2 rounded-md  hover:bg-gray-900 hover:text-blue-400 font-medium transition duration-300"
            onClick={() => handleParams("vision", "1")}
          >
            Vision
          </button>
        </ul>
        <h3 className="text-white font-bold">Choose a topic: {topic}</h3>
        <h3 className="text-white font-bold">Choose a page: {page}</h3>
      </div>

      <div className="mt-8 w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
