import React, { useMemo } from 'react';

export default function ProjectCard({ project }: IProjectCardProps) {
  const defaultColor = '#4dc2f1';
  const isImage = useMemo(() => project.title.includes('./'), [project.title]);
  return (
    <div className="project-card">
      <div
        className="project-card__bg"
        style={{ backgroundColor: project.color || defaultColor }}
      />

      <div className="project-card__title-container">
        {isImage ? (
          <img
            src={project.title}
            alt="project"
            className="project-card__title-image"
          />
        ) : (
          <h4 className="project-card__title">{project.title}</h4>
        )}
      </div>
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt="project"
          className="project-card__image"
        />
      </div>
    </div>
  );
}
