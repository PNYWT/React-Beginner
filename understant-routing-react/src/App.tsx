import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import Team from "./Screen/Team";
import NotFound from "./Screen/NotFound";
import CurrentLocation from "./Screen/CurrentLocation";
import Dashboard from "./Screen/Dashboard";

/*
  / -> Home
  /about -> About
  /contact -> Contact
*/
function App() {
  return (
    <Router>
      <nav className="flex flex-row justify-center p-4 bg-slate-200 text-slate-800 border-lg gap-2 ">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/"
              className="cursor-pointer hover:text-blue-400 font-medium transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer hover:text-blue-400 font-medium transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cursor-pointer hover:text-blue-400 font-medium transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <CurrentLocation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
