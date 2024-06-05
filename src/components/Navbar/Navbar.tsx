import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h1>{title}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/Resumen">Sobre Mí</a>
        </li>
        <li>
          <a href="/Proyectos">Proyectos</a>
        </li>
        <li>
          <a href="/Contacto">Contáctame</a>
        </li>
      </ul>
      <ul className="social-media">
        <li>
          <a href="https://github.com/adriana75" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:adrianaparedessalinas@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/3186219938" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
