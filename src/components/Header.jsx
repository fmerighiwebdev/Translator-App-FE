import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Header.css";
import translatorLogo from "../images/translate-icon.svg";
import { Link } from "react-router-dom";

function Header() {

  const [isActive, setIsActive] = React.useState("");

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
      </Container>
    </header>
  );
}

export default Header;
