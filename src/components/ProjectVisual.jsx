export default function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-image-wrap">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    );
  }

  // These are CSS-built interface motifs, not fabricated project screenshots.
  return (
    <div className={`project-visual ${project.visual}`} aria-label="Decorative project motif">
      {project.visual === 'nebula' ? (
        <div className="nebula-console" aria-hidden="true">
          <div className="console-top"><i /><i /><i /><span>NEBULA / SYSTEM</span></div>
          <div className="console-content">
            <div className="console-orb"><span /><span /><span /></div>
            <div className="console-lines"><b /><i /><i /><b /><i /></div>
          </div>
          <div className="console-status"><span>VOICE INTERFACE</span><span>EXPERIMENTAL</span></div>
        </div>
      ) : (
        <div className="calculator-motif" aria-hidden="true">
          <span className="calc-screen">2 + 2 = 4</span>
          <div className="calc-grid">
            {['AC', '÷', '×', '−', '7', '8', '9', '+', '4', '5', '6', '=', '1', '2', '3', '0'].map((key) => (
              <i key={key}>{key}</i>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
