import { useState } from "react";
import "./card.css";

interface IProps  {
    employerName: string;
    jobTitle: string;
    descriptiion: any;
    dates: string;
    picture?: any;
    className?: string;
}
export const Card = (props: IProps) => {
    const {employerName, jobTitle, descriptiion, picture, className, dates} = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`card ${className}`} style={{maxHeight: !isOpen? '185px' : ''}}>
      <div
        className="card-title-wrapper"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img className="card-img" src={picture} alt='logo'/>
        <div className="card-title">{employerName}</div>
        <div className="card-title">{jobTitle}</div>
        <div className="card-description-text">{dates}</div>
        <div className="card-date-text">{isOpen ? 'Hide' : 'View'} Description</div>
      </div>
      {isOpen && <div className="card-descriptiion">{descriptiion}</div>}
    </div>
  );
};
