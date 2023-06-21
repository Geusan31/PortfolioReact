import React from "react";
import { language } from "../../constants";

const ProgramLanguage = () => {
  return (
    <>
      <h2>Experience</h2>
      <div className="container-language">
        {
          language.map((language) => {
            return (
              <div className="language" key={language.id}>
                <img width="70px" src={language.icon} alt={language.title} />
                <p>{language.title}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProgramLanguage;