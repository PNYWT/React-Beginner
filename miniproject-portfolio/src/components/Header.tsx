import React from "react";

type Detail = {
  name: string;
  profession: string;
};

const Header = ({ detail }: { detail: Detail }) => {
  return (
    <header className="App-header">
      <h1>{detail.name}</h1>
      <p>{detail.profession}</p>
      <nav>
        <a href="#about">About</a>
        <a href="#about">Projects</a>
        <a href="#about">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
