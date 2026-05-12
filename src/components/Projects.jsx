import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-heading">
        <span className="section-number">03.</span>
        Projects
      </h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={project.url} className="project-item">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span className="project-number">{String(index + 1).padStart(2, '0')}.</span>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <span className="project-arrow">→</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
