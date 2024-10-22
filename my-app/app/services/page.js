
import React from 'react';
import Navbar from '../_components/Navbar/page';


const ServicesPage = () => {
const services = [
    {
id: 1,
name: 'Primary Care',
description: 'Comprehensive healthcare for individuals and families.',
    },
    {
id: 2,
name: 'Emergency Services',
description: 'Immediate care for urgent health issues.',
    },
    {
id: 3,
name: 'Pediatrics',
description: 'Healthcare services for infants, children, and adolescents.',
    },
    {
id: 4,
name: 'Surgical Services',
description: 'Specialized surgical procedures by expert surgeons.',
    },
    {
id: 5,
name: 'Cardiology',
description: 'Heart health and cardiovascular care services.',
    },
  ];

return (
<div className="p-20">
<header className="flex justify-center p-20">
<h1 className='text-3xl font-bold'>Our Services</h1>
</header>

<section className="my-20 text-2xl">
        {services.map((service) => (
<div key={service.id} className="border-r-4 p-16 my-10 bg-slate-600">
<h2>{service.name}</h2>
<p>{service.description}</p>
</div>
        ))}
</section>


</div>
  );
};

export default ServicesPage;

