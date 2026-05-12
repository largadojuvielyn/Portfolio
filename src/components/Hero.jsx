import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero-name">Juvielyn Largado</h1>
      <p className="hero-role">Fullstack Engineer</p>
      <p className="hero-desc">
        I’m a Filipino developer, and I’ve spent about three years building web apps people actually use. I kicked off my career in QA, and honestly, that’s where I got to see firsthand how software quality shapes not just the product, but the whole user experience. It’s wild how a single bug can mess up someone’s day or business process. That pushed me to leave testing behind and dig into creating those products myself—solving real issues as they pop up in production.
        What keeps me excited about this work? It’s watching an idea grow into something that makes a difference for real users. Every project has taught me something new, and I try to keep that practical mindset: focus on solutions that matter, deliver value, and make users’ lives easier.
      </p>
      <a href="#projects" className="hero-cta">
        View my work
      </a>
    </section>
  );
}
