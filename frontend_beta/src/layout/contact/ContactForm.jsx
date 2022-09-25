import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Confirmation from "./Confirmation";

const ContactForm = () => {
  const form = useRef();
  const [Status, setStatus] = useState("Sent");
  const [Color, setColor] = useState("Green");
  const [Visibility, setVisibility] = useState("invisible");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_emv8vaj",
        "template_7e3t07s",
        form.current,
        "PHckVEnxFZr2OjsJj"
      )
      .then(
        () => {
          console.log("Message sent !");
          let form = document.getElementById("form");
          form.reset();
          setStatus("Sent");
          setColor("Green");
          setVisibility("visible");

          setTimeout(() => {
            setVisibility("invisible")
          }, 2000);
          
          
        },
        () => {
          console.log("Message failed to send!");
          setStatus("Not Sent");
          setColor("Red");
          setVisibility("visible");
          
          setTimeout(() => {
            setVisibility("invisible")
          }, 2000);
          
        }
      );
  };

  return (
    <div className="form">
      <Confirmation visibility={Visibility} confirm={Status} color={Color} />
      <section className="form__suggestion">
        <h1>Let's create something together</h1>
        <p>
          if you have ideas, suggestions, questions, or any form of input. Make
          sure to leave us a message.
        </p>

        <blockquote>
          " Thank you for looking at my website and taking the time to write for
          us. We appreciate your feedback, and I'll be sure to personally reply
          as soon as possible "
        </blockquote>
        <p> - Simon Reinhardt</p>
      </section>

      <section className="form__form">
        <form id="form" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="user_name">Full Name</label>
            <input id="user_name" type="text" name="user_name" />
          </div>

          <div>
            <label htmlFor="user_email">Email</label>
            <input id="user_email" type="email" name="user_email" />
          </div>

          <div>
            <label htmlFor="user_message">Message</label>
            <textarea id="user_message" name="user_message" />
          </div>

          <div>
            <button type="submit" value="send">
              Send
            </button>
          </div>
        </form>
      </section>

      <section className="form__other">
        <h3>Social Media:</h3>
        <div>
          <a
            href="https://github.com/Ssenseii"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/saad-aboussabr-647a6a22a/"
            target="_blank"
            rel="noreferrer"
          >
            Linkdin
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
