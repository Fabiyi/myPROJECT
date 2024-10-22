"use client"
import React, { useState } from 'react';
import Buttons from '../_components/Buttons/Button';


const ContactPage = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [confirmation, setConfirmation] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
    // Here you can implement form submission to an API or backend
setConfirmation(`Thank you for contacting us, ${name}!`);
setName('');
setEmail('');
setMessage('');
  };

return (
<div className="p-20">
<header className="flex justify-center p-20">
<h1 className='text-2xl font-bold'>Contact Us</h1>
</header>

<form className="flex flex-col justify-center my-20" onSubmit={handleSubmit}>
<div className="my-10">
<label htmlFor="name" className='mr-10'>Full Name:</label>

<input
type="text"
id="name"
value={name}
onChange={(e) =>setName(e.target.value)}
required />
</div>

<div className="m-10">
<label htmlFor="email" className='mr-10 text-xl'>Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) =>setEmail(e.target.value)}
required />
</div>

<div className="m-10">
<label htmlFor="message" className='mr-10 text-xl'>Message:</label>
<textarea
id="message"
value={message}
onChange={(e) =>setMessage(e.target.value)}
required
></textarea>
</div>
<Buttons text="Send Message"/>

</form>

      {confirmation&&<p className="confirmation-message">{confirmation}</p>}


</div>
  );
};

export default ContactPage;
