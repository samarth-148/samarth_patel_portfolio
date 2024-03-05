/** @format */

import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p9md2j",
        "template_2bihbcd",
        form.current,
        "9oEoSKnpTueTGLCZp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        form.current.reset();
        alert("Message has been sent");
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icons" />
            <h4>Email</h4>
            <h5>samarth.patel1408@gmail.com</h5>
            <a href="mailto:samarth.patel1408@gmail.com" target="_blank">
              Send me an Email
            </a>
          </article>
          <article className="contact_option">
            <IoIosCall className="contact_option-icons" />
            <h4>Phone</h4>
            <h5>+1-825-747-2924</h5>
            <a href="tel:8257472924">Text or Call Me</a>
          </article>
          <article className="contact_option">
            <FaLinkedin className="contact_option-icons" />
            <h4>Linkedin</h4>
            <h5>samarth.patel1408@gmail.com</h5>
            <a href="https://www.linkedin.com/in/samarth-patel-8572a0232">
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="15"
            required
            placeholder="Your Message"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
