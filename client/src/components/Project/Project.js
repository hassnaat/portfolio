import React from "react";
import "./Project.css";
const Project = ({ image_url, title, url }) => {
  return (
    <div className="project">
      <img src={image_url} alt="Project Image" />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <a href={url} target="_blank" className="project__url">
          Click here to visit
          <i class="fas fa-arrow-circle-right right__align"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
