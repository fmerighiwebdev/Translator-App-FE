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
                "727cbb2594msh74d176ce792be42p1d1a15jsnbcfc845c7f7e",
              "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
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
