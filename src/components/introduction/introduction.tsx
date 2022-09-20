import "./introduction.css";
import cartoonDavid from "../../assets/cartoon-david.jpeg";
export const Introduction = () => {
  return (
    <div className="introduction">
      <div className="content">
        <div className="text-section">
          <div className="title">Hi, I'm David. A Software Engineer</div>
          <div className="sub-title">
            Welcome to my website! Here you can view my experience and education
            in a convinient way!
          </div>
        </div>
        <img className="cartoon-img" src={cartoonDavid} alt="" />
      </div>
    </div>
  );
};
