import { Card } from "../card/card";
import clarkCountyLogo from "../../assets/clark-county-logo.png";
import UNLVLogo from "../../assets/UNLV-logo.png";
import JT4Logo from "../../assets/jt4-logo.png";
import creditOneBankLogo from "../../assets/Credit-One-Bank-logo.png";
import iDTechLogo from "../../assets/id-tech-logo.png";
import WestinisLogo from "../../assets/westinis-logo.webp";
import "./workExperience.css";
interface IProps {
  workExperienceRef: React.MutableRefObject<any>;
}
export const WorkExperience = (props: IProps) => {
    const {workExperienceRef} = props;
  return (
    <div className="work-experience" ref={workExperienceRef}>
      <div className="work-experience-content">
        <div className="title">Work Experience</div>
        <div className="work-experience-card-wrapper">
          <Card
            employerName="Clark County"
            jobTitle="Programmer Analyst (Full Stack)"
            descriptiion={<>No descriptiion yet</>}
            picture={clarkCountyLogo}
            className="work-experience-card"
            dates="Oct 2022 - Present"
          />
          <Card
            employerName="Credit One Bank"
            jobTitle="Software Engineer (Front-End)"
            descriptiion={
              <>
                <ul>
                  <li>
                    Lead front end engineer for a post log-in banking experience
                  </li>
                  <li>
                    Collaborated with designers, enterprise architects, product
                    owners, back end developers, and share holders to deliver
                    end to end external applications
                  </li>
                  <li>
                    Utalized figma to ensure design patterns of applications
                    were met
                  </li>
                  <li>
                    Organized state management in projects by using both React
                    Context and Redux
                  </li>
                </ul>
                <p>
                  Tools Used: React.js, Typescript, Jira, Gitlab, Figma, Redux,
                  Okta
                </p>
              </>
            }
            picture={creditOneBankLogo}
            className="work-experience-card"
            dates="Jan 2022 - Oct 2022"
          />
          <Card
            employerName="University of Nevada, Las Vegas"
            jobTitle="Teaching Assistant"
            descriptiion={
              <ul>
                <li>
                  Held office hours to reinforce concepts and graded weekly
                  assignments for CS 477 (Algorithm Analysis)
                </li>
                <li>
                  Taught lab for EGG 101 (Intro to Engineering) and guided
                  students through group projects
                </li>
                <li>Acted as a mentor for first year engineering students</li>
              </ul>
            }
            picture={UNLVLogo}
            className="work-experience-card"
            dates="Aug 2021 - Dec 2021"
          />
          <Card
            employerName="JT4"
            jobTitle="Software Engineer Intern (Front-End)"
            descriptiion={
              <>
                <ul>
                  <li>
                    Developed CRUD Web App using Blazor to randomly select
                    employees from database, send email notifications of pending
                    drug tests and update information based on completion of
                    tests
                  </li>
                  <li>
                    Participated in meetings to determine project requirements
                  </li>
                  <li>Wrote automated testing scripts using CodeceptJs</li>
                </ul>
                <p>Tools Used: Blazor, C#, BitBucket, Postman</p>
              </>
            }
            picture={JT4Logo}
            className="work-experience-card"
            dates="Jun 2021 - Aug 2021"
          />
          <Card
            employerName="University of Nevada, Las Vegas"
            jobTitle="Network Engineer Intern"
            descriptiion={
              <>
                <ul>
                  <li>
                    Configured, installed, and maintained CISCO firewalls,
                    wireless access points, and switches
                  </li>
                  <li>
                    Automated tasks for senior engineers using Python and CSV
                    files
                  </li>
                </ul>
                <p>Tools Used: Python, Linux</p>
              </>
            }
            picture={UNLVLogo}
            className="work-experience-card"
            dates="Apr 2021 - May 2021"
          />
          <Card
            employerName="University of Nevada, Las Vegas"
            jobTitle="Software Engineer Intern (Accessibility)"
            descriptiion={
              <>
                <ul>
                  <li>
                    Worked with Forest Inventory and Analysis team on front end
                    web development
                  </li>
                  <li>
                    Wrote and tested code to ensure web applications are
                    accessible to people with disabilities, meeting WCAG section
                    508 compliance standards
                  </li>
                </ul>
                <p>
                  Tools Used: Javascript, JQuery, Aria, ANDI, NVDA Screen Reader
                </p>
              </>
            }
            picture={UNLVLogo}
            className="work-experience-card"
            dates="Oct 2020 - Apr 2021"
          />
          <Card
            employerName="Westinis Inc"
            jobTitle="Software Engineer Intern (Full Stack)"
            descriptiion={
              <>
                <ul>
                  <li>
                    Created application to continuously pull data from various
                    APIs to insert into a cloud database using C# and SQL.
                  </li>
                  <li>
                    Updated Web Application to look visually appealing on mobile
                    devices using HTML and CSS.
                  </li>
                </ul>
                <p>
                  Tools Used: Responsive Web Design, C#, .Net Core, SQL, MS SQL
                  Server
                </p>
              </>
            }
            className="work-experience-card"
            picture={WestinisLogo}
            dates="Apr 2020 - Aug 2020"
          />
          <Card
            employerName="ID Tech Camps"
            jobTitle="Coding Instructor"
            descriptiion={
              <>
                <ul>
                  <li>
                    Prepared lesson plans to follow curriculum standards
                    established by the summer camp
                  </li>
                  <li>
                    Taught programming fundamentals in C++, Java, and Python
                  </li>
                  <li>
                    Managed 8-10 students per week as they worked on programming
                    projects
                  </li>
                  <li>
                    Led diploma ceremony each week to commemorate student
                    achievements to parents
                  </li>
                </ul>
                <p>Tools Used: C++, Java, Python, Scratch, Cozmo SDK</p>
              </>
            }
            picture={iDTechLogo}
            className="work-experience-card"
            dates="May 2019 - Aug 2019"
          />
        </div>
      </div>
    </div>
  );
};
