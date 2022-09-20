import React, { useRef, useState } from "react";
import "./App.css";
import { Education } from "./components/education/education";
import { ContactMe } from "./components/contact-me/contactMe";
import { Header } from "./components/header/header";
import { Introduction } from "./components/introduction/introduction";
import { WorkExperience } from "./components/work-experience/workExperience";

function App() {
  const workExperienceRef = useRef<any>(null);
  const educationRef = useRef<any>(null);
  const contactMeRef = useRef<any>(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div
      className="App"
      onClick={() => {
        if (openHamburger) setOpenHamburger(false);
      }}
    >
      <Header
        workExperienceRef={workExperienceRef}
        educationRef={educationRef}
        contactMeRef={contactMeRef}
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
      />
      <Introduction />
      <WorkExperience workExperienceRef={workExperienceRef} />
      <Education educationRef={educationRef} />
      <ContactMe contactMeRef={contactMeRef} />
    </div>
  );
}

export default App;
