import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import Language from "./Language";

import "../styles/Languages.css";

function Languages() {
  const [languages, setLanguages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getLanguages() {
      try {
        const langData = await axios.get(
          "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
          {
            headers: {
              "X-RapidAPI-Key":
                process.env.REACT_APP_RAPIDAPI_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
            },
          }
        );
        console.log(langData.data.data.languages);
        setLanguages(langData.data.data.languages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getLanguages();
  }, []);

  return (
    <section className="languages">
        <Container className="languages-container">
          {loading && (
            <div className="spinner-container">
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <h2>Lingue supportate</h2>
          <p className="section-description">Qui puoi visualizzare tutte le lingue supportate dal traduttore</p>
          <ul>
            {languages.map((language, index) => (
              <Language key={index} language={language} />
            ))}
          </ul>
        </Container>
    </section>
  );
}

export default Languages;
