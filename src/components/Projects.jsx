import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
// import CardComponent from "./CardComponent";

const Projects = () => {
  const projects = projectsData;

  return (
    <section>
      <h2>Mis proyectos</h2>
      <div>
        {/* <CardComponent /> */}
        {projects.map((project, index) => (
          <>
            <ProjectCard
              index={index}
              image={project.image}
              title={project.title}
              linkGithub={project.linkGithub}
              linkVercel={project.linkVercel}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
