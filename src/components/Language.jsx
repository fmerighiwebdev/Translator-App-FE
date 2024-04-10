import React from "react";

import languageNames from "../language-names";
import languageFlags from "../language-flags";

function Language({ language }) {
  const languageFullName =
    languageNames[language.language] || language.language;
  const languageFlag = languageFlags[language.language];

  return (
    <li>
      <p>{languageFullName}</p>
      {languageFlag ? <img src={languageFlag} alt={languageFullName} /> : null}
    </li>
  );
}

export default Language;
