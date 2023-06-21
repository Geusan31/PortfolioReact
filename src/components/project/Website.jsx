import React from "react";
import { projects } from "../../constants";
import { Link } from "react-router-dom";
const Website = () => {
  return (
    <div className="content">
      {projects.map((project) => {
        return (
          <div className={`card ${project.id % 2 === 0 ? "active" : ""}`}>
            <div className="detail-card">
              <h2>Project {project.id}</h2>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to="/">Read more</Link>
            </div>
            <div className="cover-project">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Website;