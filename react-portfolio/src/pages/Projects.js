import React from "react";
import dayplanner from "../images/dayplanner.jpg";
import passwordgenerator from "../images/passwordgenerator.jpg";
import Regex from "../images/Regex.png";
import pwa from "../images/pwa.jpeg";
import sql from "../images/Sql.png";
import orm from "../images/Orm.jpeg";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "day-planner",
      image: dayplanner,
      description: "",
      link: "https://suleras.github.io/Day-Planner/",
      GitHub: "https://github.com/SuleRas/Day-Planner",
    },
    {
      id: 2,
      title: "password-generator",
      image: passwordgenerator,
      description: "",
      link: "https://suleras.github.io/Password-Generator/",
      GitHub: "https://github.com/SuleRas/Password-Generator",
    },
    {
      id: 3,
      title: "RegEx",
      image: Regex,
      description: "",
      link: "https://gist.github.com/SuleRas/2c458ce4aa4ee88b767364f72e02528e",
      GitHub: "https://github.com/SuleRas/Regex-Tutorial",
    },
    {
      id: 4,
      title: "Pwa",
      image: pwa,
      description: "",
      link: "https://suleras.github.io/pwa-text-editor/",
      GitHub: "https://github.com/SuleRas/pwa-text-editor",
    },
    {
      id: 5,
      title: "Sql",
      image: sql,
      description: "",
      link: "https://suleras.github.io/sql-employee-tracker/",
      GitHub: "https://github.com/SuleRas/sql-employee-tracker",
    },
    {
      id: 6,
      title: "ORM",
      image: orm,
      description: "E-commerce back-end",
      link: " https://suleras.github.io/Object-Relational-Mapping-ORM-E-commerce-Back-End/",
      GitHub:
        "https://github.com/SuleRas/Object-Relational-Mapping-ORM-E-commerce-Back-End",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1000px",
      }}
    >
      {myProjects.map((project) => (
        <ProjectCard
          key={project.id}
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
