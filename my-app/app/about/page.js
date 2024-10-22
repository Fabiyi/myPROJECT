"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Mydom from "../Images/Doctor4.jpg";
import Mydon from "../Images/Doctor13.jpg";
import Mydoo from "../Images/Doctor8.jpg";



export default function About() {
  return (
    <main className="bg-slate-300"> 
    <section >
    <div>
        <h1 className="flex justify-center font-semibold py-4 mx-[30%] text-4xl ">ABOUT DAMTOL HEALTHCARE</h1>
        <p className="text-2xl mx-10 flex justify-center font-medium">We are a leading healthcare provider offering top-notch medical services.</p>
        <p className=" flex justify-center font-medium text-2xl">Our team of expert doctors ensures that you get the best care possible.</p>
    </div>
    </section>

    <section>
    <h2 className="flex justify-center font-bold py-4 mx-[35%] text-3xl ">Our Mission</h2>
    <p className="text-2xl flex justify-center font-medium mx-[15%]">Our mission is to provide compassionate, high-quality healthcare to our community,
    while fostering a culture of respect, integrity, and excellence.
    </p>
    </section>
    <section>
    <h2 className="flex justify-center font-bold py-4 mx-[35%] text-3xl ">Our History</h2>
      <p className="flex justify-center font-medium text-2xl mx-[15%]">
      Established in 1990, our healthcare organization has been serving the community
      with dedication and care. Over the years, we have expanded our services and facilities
      to meet the evolving needs of our patients.
      </p>

    </section>
    <section className="grid">
    
        <h2 className="flex justify-center font-semibold py-4 mx-[35%] text-3xl ">Meet Our Team</h2>  
    <div className="flex gap-6  px-4 py-4 mx-8">
        <div className="bg-slate-500 flex flex-col">
          
        <Image src={Mydom} width={200} height={200} className="mx-24 p-2 rounded-[50%] border-r-8"/>
        
            <h3 className=" text-4xl font-extrabold">Dr. Akin Adeboye</h3>
            <p className="text-xl font-medium px-12">Chief Medical Officer</p>
            <p className="flex justify-center font-medium text-2xl px-2 ">Specializes in family medicine and patient care.</p>
        </div>
        <div className=" bg-slate-500 flex flex-col">
        <Image src={Mydon} width={200} height={200} className="mx-24 p-2 rounded-[50%] border-r-8"/>
            <h3 className="text-4xl font-extrabold">Dr. Segun Okeowo</h3>
            <p className="text-xl font-medium px-16">Surgeon</p>
            <p className="flex justify-center font-medium text-2xl px-4">Expert in minimally invasive surgery techniques.</p>
        </div>
        <div className=" bg-slate-500 flex flex-col">
        <Image src={Mydoo} width={200} height={200} className="mx-24 p-2 rounded-[50%] border-r-8"/>
            <h3 className="text-4xl font-extrabold">Dr. Justina Fagbemi</h3>
            <p className="text-xl font-medium px-24">Pediatrician</p>
          <p className="flex justify-center font-medium text-2xl px-4">Dedicated to providing care for children and adolescents.</p>
        </div>
    </div>
    </section>
    <section>
            <h2 className="flex justify-center text-3xl font-bold">Our Values</h2>
            <ul className="flex justify-around text-2xl ">
              <Link href="#" className=" hover:text-blue-600">Compassion</Link>
              <Link href="#" className=" hover:text-blue-600">Integrity</Link>
              <Link href="#" className=" hover:text-blue-600">Excellence</Link>
              <Link href="#" className=" hover:text-blue-600">Innovation</Link>          
              </ul>
    </section>
    </main>
  );
}
 