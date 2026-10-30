import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-number">{project.number} / {project.type}</span>
          <span className={`status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>
            {project.status}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        {project.link ? (
          <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
            View project <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-note">Project link not published</span>
        )}
      </div>
    </article>
  );
}
