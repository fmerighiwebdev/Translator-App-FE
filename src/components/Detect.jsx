import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import "../styles/Detect.css";
import languageNames from "../language-names";

function Detect() {
  const [inputText, setInputText] = React.useState("");
  const [detectedLanguage, setDetectedLanguage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  async function detectLanguage(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
        `q=${inputText}`,
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
          },
        }
      );
      setDetectedLanguage(result.data.data.detections[0][0].language);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const detectedLanguageName = languageNames[detectedLanguage];

  return (
    <section className="detect">
      <Container className="detect-container">
        <h2>Rileva lingua</h2>
        <p className="section-description">
          Qui puoi inserire un testo e lasciare che il traduttore rilevi la
          lingua in cui è stato scritto.
        </p>
        <form className="detect-form">
          <textarea
            placeholder="Inserisci il testo da rilevare..."
            rows="7"
            onChange={handleChange}
          ></textarea>
          <div className="submit">
            <button onClick={detectLanguage}>
              {loading ? (
                <div className="spinner-border text-light" style={{ width: '20px', height: '20px' }} role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Rileva lingua"
              )}
            </button>
            {detectedLanguage && (
              <p className="result">
                La lingua rilevata è <span>{detectedLanguageName}</span>
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Detect;
