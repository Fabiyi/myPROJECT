"use client"
import React, { useState } from 'react';
import Buttons from '../_components/Buttons/Button';

const AppointmentsPage = () => {
const [name, setName] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
    // Here you can implement form submission to an API or backend
setMessage(`Appointment scheduled for ${name} on ${date} at ${time}.`);
setName('');
setDate('');
setTime('');
  };

return (
<div className="p-20">
<header className="bg-blue-200 p-20 flex justify-center font-semibold text-4xl">
<h1>Schedule an Appointment</h1>
</header>

<form className="flex flex-col justify-center" onSubmit={handleSubmit}>
<div className="my-10">
<label htmlFor="name" className='mr-10'>Full Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) =>setName(e.target.value)}
required
          />
</div>

<div className="my-10">
<label htmlFor="date" className='mr-10'>Date:</label>
<input
type="date"
id="date"
value={date}
onChange={(e) =>setDate(e.target.value)}
required
          />
</div>

<div className="my-10">
<label htmlFor="time" className='mr-10'>Time:</label>
<input
type="time"
id="time"
value={time}
onChange={(e) =>setTime(e.target.value)}
required
          />
</div>
      <Buttons text="Schedule appiontment"/>

</form>

      {message&&<p className="mt-20 text-green-500">{message}</p>}

</div>
  );
};

export default AppointmentsPage;


