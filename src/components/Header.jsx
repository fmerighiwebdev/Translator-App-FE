import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Header.css";
import translatorLogo from "../images/translate-icon.svg";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
      <Container className="header-container">
        <div className="logo-content">
          <Link to="/">
            <img src={translatorLogo} alt="Translator Logo"></img>
          </Link>
          <h1>Translator App</h1>
        </div>
        <nav className="header-menu">
          <ul>
            <li>
              <Link to="/detect">Rileva lingua</Link>
            </li>
            <li>
              <Link to="/languages">Lingue supportate</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
