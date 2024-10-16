import React from "react";


export default function Appointment() {
  return (
    <div>
      
      <main>
        <h1>Book an Appointment</h1>
        <form className="appointment-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" required />
          <label htmlFor="service">Service Needed</label>
          <select id="service" name="service">
            <option value="general-medicine">General Medicine</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </main>
      
    </div>
  );
}

