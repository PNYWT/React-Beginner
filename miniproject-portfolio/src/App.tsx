import './App.css'

function App() {

  const name = "Callme Oni";
  const noSpaceName = name.replaceAll(" ", "");
  const profession = "Full Stack Web Developer & iOS Developer";

  const projects = [
    {
      title: "Project eCommerce - Backend",
      description: "An eCommerce CRUD built using Java Spring Boot",
      link: "https://github.com"
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "https://github.com"
    }
  ]

  return (
    <div className='App'>
      {/* Header Section */}
      <header className='App-header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#about">Projects</a>
          <a href="#about">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='App-about-section'>
        <h2>About Me</h2>
        <p>Hello! I'm {name}, a passionate {profession}. I love building web application and mobile iOS application that solve real world user problems.</p>
      </section>

      {/* Projects Section */}
      <section id='projects' className='App-projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-list-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel={"noopener noreferrer"}>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='App-contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to contact me, you can reach me at email: <a href="mailto:callmeoni@example.com">callmeoni@example.com</a></p>
      </section>

      {/* Footer Section */}
      <footer className='App-footer'>
        <p>&copy; 2023 {noSpaceName}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
