import React from 'react';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Translator App</p>
      <p>
        Credits:{" "}
        <a href="https://www.linkedin.com/in/francesco-merighi-373939217/">
          Francesco Merighi
        </a>
      </p>
    </footer>
  );
}

export default Footer