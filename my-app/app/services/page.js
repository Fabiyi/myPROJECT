
import React from 'react';
import Navbar from '../_components/Navbar/page';


export default function Services() {
  const services = [
    { name: 'General Medicine', description: 'Comprehensive primary care services.' },
    { name: 'Pediatrics', description: 'Healthcare for children and adolescents.' },
    { name: 'Cardiology', description: 'Expert heart and vascular care.' },
    { name: 'Dermatology', description: 'Skin care and treatment solutions.' },
  ];

  return (
    <div>
      
      <main className=" bg-slate-300 py-4 px-8">
        <h1 className=" text-xl ">Our Services</h1>
        <div className=" bg-slate-300">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </main>
      
    </div>
  );
}
