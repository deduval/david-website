import { Card } from "../card/card";
import UNLVLogo from "../../assets/UNLV-logo.png";
import "./education.css";
interface IProps {
  educationRef: React.MutableRefObject<any>;
}
export const Education = (props: IProps) => {
    const {educationRef} = props;
  return (
    <div className="education" ref={educationRef}>
      <div className="education-content">
        <div className="title">Education</div>
        <Card
          employerName="University of Nevada, Las Vegas"
          jobTitle="Bachelor of Arts Computer Science"
          descriptiion={
            <ul>
              Relevent Coursework
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=23&coid=113338"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Computer Science I
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=9&coid=43079"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Computer Science II
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=1&coid=19243"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Data Structures
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=6&coid=32941"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Systems Programming
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=4&coid=26102"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Computer Organization
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=4&coid=26107"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Programming Languages, Concepts and Implementation
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=9&coid=43091"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Operating Systems
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=9&coid=43113"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Analysis of Algorithms
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=19&coid=95479"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Information Assurance
                </a>
              </li>
              <li>
                <a
                  href="https://catalog.unlv.edu/preview_course_nopop.php?catoid=4&coid=26136"
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  Advanced Computer Science Topics (Cloud Computing)
                </a>
              </li>
            </ul>
          }
          picture={UNLVLogo}
          className="work-experience-card"
          dates="Aug 2018 - Dec 2021"
        />
      </div>
    </div>
  );
};
