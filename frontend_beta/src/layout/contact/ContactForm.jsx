import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

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
        },
        () => {
          console.log("Message failed to send!");
        }
      );
  };

  return (
    <main className="form">
      <section className="form__suggestion">
        <h1>Let's create something together</h1>
        <p>
          if you have ideas, suggestions, questions, or any form of input. Make
          sure to leave us a message.
        </p>
      </section>

      <section className="form__form">
        <form ref={form} onSubmit={sendEmail}>
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
            <button type="submit" value="send" >Send</button>
          </div>
        </form>
      </section>

      <section className="form__other">
        <h3>Social Media:</h3>
        <div>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
