import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Header.css";
import translatorLogo from "../images/translate-icon.svg";
import { Link } from "react-router-dom";

function Header() {

  const [isActive, setIsActive] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

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
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={menuOpen ? "line active" : "line"}></div>
            <div className={menuOpen ? "line active" : "line"}></div>
            <div className={menuOpen ? "line active" : "line"}></div>
          </div>
          <ul>
            <li>
              <Link
                to="/translate"
                onClick={() => setIsActive("Translate")}
                className={isActive === "Translate" ? "link-active" : null}
              >
                Traduci
              </Link>
            </li>
            <li>
              <Link
                to="/detect"
                onClick={() => setIsActive("Detect")}
                className={isActive === "Detect" ? "link-active" : null}
              >
                Rileva lingua
              </Link>
            </li>
            <li>
              <Link
                to="/languages"
                onClick={() => setIsActive("Languages")}
                className={isActive === "Languages" ? "link-active" : null}
              >
                Lingue supportate
              </Link>
            </li>
          </ul>
        </nav>
        {menuOpen && (
          <ul className="menu-mobile">
            <li>
              <Link
                to="/translate"
                onClick={() => setIsActive("Translate")}
                className={isActive === "Translate" ? "link-active" : null}
              >
                Traduci
              </Link>
            </li>
            <li>
              <Link
                to="/detect"
                onClick={() => setIsActive("Detect")}
                className={isActive === "Detect" ? "link-active" : null}
              >
                Rileva lingua
              </Link>
            </li>
            <li>
              <Link
                to="/languages"
                onClick={() => setIsActive("Languages")}
                className={isActive === "Languages" ? "link-active" : null}
              >
                Lingue supportate
              </Link>
            </li>
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;
