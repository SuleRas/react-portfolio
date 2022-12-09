import React from "react";

import Card from "react-bootstrap/Card";

// react bootstrap
function ProjectCard({ title, image, description, link, GitHub }) {
  return (
    <Card style={{ width: "18rem" }}>
      <a href={link}>
        <Card.Img variant="top" src={image} alt={title} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
