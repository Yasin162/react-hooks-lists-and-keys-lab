import React from "react";

function ProjectItem({ name, about, technologies }) {
  const span = technologies.map(techName => <span key={techName}> {techName}</span> )
      return (
  <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {span}
      </div>
    </div>
  );
}

export default ProjectItem;
