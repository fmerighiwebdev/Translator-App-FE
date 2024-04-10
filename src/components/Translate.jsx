import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import '../styles/Translate.css';

import languageNames from '../language-names';

function Translate() {

    const [loading, setLoading] = React.useState(false);
    const [inputText, setInputText] = React.useState("");
    const [selectedLanguage, setSelectedLanguage] = React.useState("");
    const [translatedText, setTranslatedText] = React.useState("");
    const [detectedLanguageName, setDetectedLanguageName] = React.useState("");

    let detectedLanguage = "";

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleSelectChange(event) {
        setSelectedLanguage(event.target.value);
    }

    async function translateText(event) {
        event.preventDefault();

        setLoading(true);

        try {
            const result = await axios.post(
                'https://google-translate1.p.rapidapi.com/language/translate/v2',
                `q=${inputText}&target=${selectedLanguage}`,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                        'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
                    },
                }
            );
            console.log(result.data);
            setTranslatedText(result.data.data.translations[0].translatedText);
            detectedLanguage = result.data.data.translations[0].detectedSourceLanguage;
            setDetectedLanguageName(languageNames[detectedLanguage]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <section className="translate">
      <Container className="translate-container">
        <h2>Traduci</h2>
        <p className="section-description">
          Qui puoi inserire un testo e selezionare la lingua in cui tradurlo.
        </p>
        <form className="translate-form">
            <div className="select-language">
                <p>Seleziona una lingua</p>
                <select onChange={handleSelectChange}>
                    {Object.entries(languageNames).map(([code, name]) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
          <textarea
            placeholder="Inserisci il testo da tradurre..."
            rows="7"
            onChange={handleChange}
          ></textarea>
            <button onClick={translateText}>
              {loading ? (
                <div
                  className="spinner-border text-light"
                  style={{ width: "20px", height: "20px" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Traduci"
              )}
            </button>
        </form>
        {translatedText && (
          <div className="result">
            <h3>Testo tradotto da <span>{detectedLanguageName}</span></h3>
            <p>{translatedText}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Translate