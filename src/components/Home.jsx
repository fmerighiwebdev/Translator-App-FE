import React from 'react';
import { Container } from 'react-bootstrap';

import detectIcon from '../images/detect-icon.svg';
import translateIcon from '../images/translate-icon-home.svg';
import languagesIcon from '../images/languages-icon.svg';

import '../styles/Home.css';

function Home() {
  return (
    <main className="home">
      <Container className="home-container">
        <div className="feature-card">
          <img src={translateIcon} alt="Translate Icon" />
          <h3>Traduci</h3>
          <p>Traduci testi in altre lingue.</p>
        </div>
        <div className="feature-card">
          <img src={detectIcon} alt="Detect Icon" />
          <h3>Rileva lingua</h3>
          <p>Rileva la lingua in cui è scritto un testo.</p>
        </div>
        <div className="feature-card">
          <img src={languagesIcon} alt="Languages Icon" />
          <h3>Lingue supportate</h3>
          <p>Scopri le lingue supportate dal traduttore.</p>
        </div>
      </Container>
    </main>
  )
}

export default Home