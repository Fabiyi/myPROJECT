import React from "react";
import Image from "next/image";


export default function Contact() {
  return (
    <div>
      
      <main>
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
     
    </div>
  );
}
