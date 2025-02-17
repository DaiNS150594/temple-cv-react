import React from 'react'
import './contact.css'
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { init } from '@emailjs/browser';

const Contact = () => {
  init("7iF7X4GICvfVmtSqM");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hcnygym', // từ EmailJS
      'template_v68k9qb', // từ EmailJS
      form.current, 
      '7iF7X4GICvfVmtSqM' // từ EmailJS
    )
    .then((result) => {
        console.log('Email sent successfully');
        e.target.reset();
    }, (error) => {
        console.log('Failed to send email:', error);
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:example@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <MdPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+233 555 555 555</h5>
            <a href="tel:+23355555555" target="_blank" rel="noreferrer">Call me</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+233 555 555 555</h5>
            <a href="https://wa.me/+23355555555" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact