import React from 'react';

function ProjectCard({ src, link, h3, p, isVideo }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {isVideo ? (
        <video className="hover" autoPlay loop muted>
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="hover" src={src} alt={`${h3} logo`} />
      )}
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
