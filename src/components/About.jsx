import './About.css';

const skills = [
  'React',  
  'JavaScript',
  'TypeScript',  
  'Node.js',
  'Express.js',
  'REST APIs',
  'HTML',
  'CSS', 
  'Git',
  'PHP',
  'React-Native',
  'Flutter',
  'MySQL',
  'MongoDB',
  'Oracle',
  'PostgreSQL',
  'JSON',  
  'Docker',
  'Github',  
  'Front-end Development',
  'Back-end Development',
  'Mobile Application Development',
  'Microsoft Office',
  'Microsoft Excel',
  'Microsoft Word',  
  'Data Analysis',
];

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-heading">
        <span className="section-number">01.</span>
        Skills
      </h2>
      <div className="about-content">
        <div className="about-text">
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
