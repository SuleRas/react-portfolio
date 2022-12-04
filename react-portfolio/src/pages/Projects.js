import React from "react";
import dayplanner from "../images/dayplanner.jpg";
// import passwordgenerator from "../images/passwordgenerator.jpg";
// import codequiz from "../images/codequiz.jpg";
// import weatherdashboard from "../images/weatherdashboard.jpg";
// import ProjectCard from "../components/ProjectCard";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "",
      GitHub: "",
    },
    {
      id: 2,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "",
      GitHub: "",
    },
    {
      id: 3,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "",
      GitHub: "",
    },
    {
      id: 4,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "",
      GitHub: "",
    },
    {
      id: 5,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "",
      GitHub: "",
    },
  ];
  return (
    <div>
      {myProjects.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
          GitHub={project.GitHub}
        />
      ))}
    </div>
  );
}

export default Projects;
