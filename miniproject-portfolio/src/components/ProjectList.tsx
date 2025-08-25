import React from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

type ProjectsListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <section id="projects" className="App-projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-list-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target="_blank" rel={"noopener noreferrer"}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
