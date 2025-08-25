import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

function App() {
  const name = "Callme Oni";
  const noSpaceName = name.replaceAll(" ", "");
  const profession = "Full Stack Web Developer & iOS Developer";

  const projects = [
    {
      title: "Project eCommerce - Backend",
      description: "An eCommerce CRUD built using Java Spring Boot",
      link: "https://github.com",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "https://github.com",
    },
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <Header detail={{ name, profession }} />

      {/* About Section */}
      <About name={name} profession={profession} />

      {/* Projects Section */}
      <ProjectList projects={projects} />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer noSpaceName={noSpaceName} />
    </div>
  );
}

export default App;
