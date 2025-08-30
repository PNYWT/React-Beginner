import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-600  flex flex-col justify-center items-center h-screen gap-2">
      <div className="bg-white dark:bg-black p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Hello world!
        </h1>
        <p className="text-gray-600 dark:text-white">
          This is a simple using Tailwind Css in React with Vite
        </p>
      </div>
      <div className="bg-gray-200 p-8 shadow-md rounded-md w-5/6">
        <ul className="list-none md:flex md:gap-1">
          <li className="bg-custom-blue text-white p-2 m-1 rounded-lg">
            Item 1
          </li>
          <li className="bg-blue-500 text-white p-2 m-1 rounded-lg">Item 2</li>
        </ul>
      </div>
      <div className="bg-gray-200 flex flex-row justify-center items-center rounded-md ">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="m-1 p-2 rounded-md bg-blue-500 text-white 
                   hover:bg-blue-600 dark:text-black"
        >
          Toggle Theme Mode
        </button>
        <p className="p-2">Now is {darkMode ? "dark" : "light"}</p>
      </div>
    </div>
  );
}

export default App;
