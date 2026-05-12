import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-heading">
        <span className="section-number">02.</span>
        Experience
      </h2>
      <div className="experience-list">
        {experience.map((job) => (
          <article key={job.company} className="experience-job">
            <div className="job-header">
              <h3 className="job-company">{job.company}</h3>
              {job.tenure && <span className="job-tenure">{job.tenure}</span>}
            </div>
            {job.roles.map((role) => (
              <div key={role.title + role.dates} className="job-role">
                <div className="role-header">
                  <h4 className="role-title">{role.title}</h4>
                  <span className="role-dates">
                    {role.dates}
                    {role.duration && ` (${role.duration})`}
                    {role.location && ` · ${role.location}`}
                  </span>
                </div>
                <ul className="role-bullets">
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {role.tags?.length > 0 && (
                  <div className="role-tags">
                    {role.tags.map((tag) => (
                      <span key={tag} className="role-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
