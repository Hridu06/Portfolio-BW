import { useState } from 'react'
import heroImage from '../../assets/Hero.png'
import logo from '../../assets/logo.png'
import './Hero.css'

const technologies = [
  { className: 'html', mark: '5', label: 'HTML' },
  { className: 'css', mark: '3', label: 'CSS' },
  { className: 'js', mark: 'JS', label: 'JavaScript' },
  { className: 'react', mark: '⚛', label: 'React' },
  { className: 'figma', mark: '●', label: 'Figma' },
]

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Hriday home">
          <img src={logo} alt="Hriday" />
        </a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        {menuOpen && (
          <nav className="menu" aria-label="Main navigation">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      <section className="hero-section" id="home">
        <div className="ambient-glow" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow"><span></span> 👋 HELLO, I'M</p>
          <h1><span>HRIDAY</span><strong>AHMED</strong></h1>
          <p className="intro">Experienced Web Developer focused on responsive design, high performance, creative user experiences, and modern UI/UX solutions for clients worldwide.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work"><span>▣</span> MY PORTFOLIO</a>
            <a className="button secondary" href="#contact"><span>↓</span> HIRE ME</a>
          </div>
        </div>

        <p className="ghost-name" aria-hidden="true">HRIDAY</p>
        <div className="portrait-wrap">
          <img src={heroImage} alt="Hriday Ahmed" className="portrait" />
        </div>

        <div className="tech-stack" aria-label="Technology stack">
          {technologies.map((tech) => (
            <div className={`tech-card ${tech.className}`} key={tech.label}>
              <span className="tech-mark">{tech.mark}</span>
              <small>{tech.label}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
