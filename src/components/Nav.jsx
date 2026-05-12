import { useState, useEffect } from 'react';
import './Nav.css';

const navLinks = [
  { id: 'about', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => sections.forEach((el) => el && observer.disconnect());
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${isMounted ? 'mounted' : ''}`} aria-label="Main">
      <ul className="nav-list">
        {navLinks.map(({ id, label }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => handleClick(e, id)}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              <span className="nav-number">0{i + 1}.</span>
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
