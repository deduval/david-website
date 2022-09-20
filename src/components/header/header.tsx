import { useState } from "react";
import hamburgerMenu from "../../assets/hambuger-menu.svg";
import "./header.css";
interface IProps {
  workExperienceRef: React.MutableRefObject<any>;
  educationRef: React.MutableRefObject<any>;
  contactMeRef: React.MutableRefObject<any>;
  openHamburger: boolean;
  setOpenHamburger: any;
}
export const Header = (props: IProps) => {
  const { workExperienceRef, educationRef, contactMeRef, openHamburger, setOpenHamburger } = props;
  return (
    <div className="header">
      <div className="left-side">
        <a
          className="header-link"
          target="_blank"
          href="https://github.com/deduval"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="header-link"
          target="_blank"
          href="https://www.linkedin.com/in/david-duval-6a0b77184/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="right-side">
        <div
          className="header-link"
          onClick={() => workExperienceRef.current.scrollIntoView()}
        >
          Work Experience
        </div>
        <div
          className="header-link"
          onClick={() => educationRef.current.scrollIntoView()}
        >
          Education
        </div>
        <div
          className="header-link"
          onClick={() => contactMeRef.current.scrollIntoView()}
        >
          Contact Me
        </div>
      </div>
      <div className="hamburger-menu">
        <img
          className="hamburger-icon"
          src={hamburgerMenu}
          alt="menu"
          onClick={() => setOpenHamburger(!openHamburger)}
        />
        {openHamburger && (
          <div className="select-menu">
            <div
              className="header-link"
              onClick={() => workExperienceRef.current.scrollIntoView()}
            >
              Work Experience
            </div>
            <div
              className="header-link"
              onClick={() => educationRef.current.scrollIntoView()}
            >
              Education
            </div>
            <div
              className="header-link"
              onClick={() => contactMeRef.current.scrollIntoView()}
            >
              Contact Me
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
