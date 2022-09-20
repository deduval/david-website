import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contactMe.css";

interface IProps {
  contactMeRef: React.MutableRefObject<any>;
}
export const ContactMe = (props: IProps) => {
  const { contactMeRef } = props;
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    
        emailjs
          .sendForm(
            "service_1izz8s6",
            "template_bzvby9g",
            form.current,
            "Vg_IhaorqunW-EnuN"
          )
          .then(
            (result: any) => {
              console.log(result.text);
            },
            (error: any) => {
              console.log(error.text);
            }
          );
    
  };

  return (
    <div className="contact-me" ref={contactMeRef}>
      <div className="contact-content">
        <div className="contact-title">Contact Me</div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="input">
            <label>Name</label>
            <input type="text" name="from_name" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>

          <div className="input">
            <label>Message</label>
            <textarea name="message" />
          </div>

          <input className="send-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
