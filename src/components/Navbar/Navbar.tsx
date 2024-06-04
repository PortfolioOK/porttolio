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
          <a href="/Resume">Resume</a>
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <ul className="social-media">
        <li>
          <a href="https://github.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:example@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/1234567890">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
