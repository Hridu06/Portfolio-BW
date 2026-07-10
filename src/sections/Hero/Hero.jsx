import "./Hero.css";
import Navbar from "../../components/Navbar/Navbar";
import Scene from "./Scene/Scene";
import FloatingTech from "./FloatingTech";

import HeroImage from "../../assets/Hero.png";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <Scene />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="hero-layout">

        <div className="hero-copy">
          <p className="eyebrow">
            <span />Frontend Developer
          </p>

          <h1>
            Sabbir <span>Hossain</span>
          </h1>

          <p className="hero-description">
            I build modern React experiences with motion, performance,
            and polished interfaces for ambitious digital brands.
          </p>

          <div className="hero-actions">
            <a href="#capabilities" className="primary-action">
              View Portfolio
              <span>
                <FaArrowRight />
              </span>
            </a>

            <a href="/cv.pdf" className="secondary-action" download>
              Download CV
            </a>
          </div>

          <div className="hero-social">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="portrait-area">
          <p className="background-name">SABBIR</p>
          <div className="portrait-glow" />
          <img
            src={HeroImage}
            alt="Sabbir Hossain"
            className="portrait"
          />

          <p className="portrait-note">
            Frontend Developer — Bangladesh · Worldwide
          </p>

          <FloatingTech />
        </div>
      </div>
    </section>
  );
}