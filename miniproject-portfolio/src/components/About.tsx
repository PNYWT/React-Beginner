import React from "react";

const About = ({ name, profession }: { name: string; profession: string }) => {
  return (
    <section id="about" className="App-about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm {name}, a passionate {profession}. I love building web
        application and mobile iOS application that solve real world user
        problems.
      </p>
    </section>
  );
};

export default About;
