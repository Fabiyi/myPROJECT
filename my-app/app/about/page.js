"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import Mydom from "../Images/Doctor4.jpg";
import Mydon from "../Images/Doctor13.jpg";
import Mydoo from "../Images/Doctor8.jpg";



export default function About() {
  
  return (
    <main className="bg-slate-300 min-h-screen pt-20 "> 
   
    <motion.section className="max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
          <motion.h1 className="flex justify-center font-semibold py-4 mx-[20%] text-3xl  text-blue-600"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.8}}
                    >
                        ABOUT DAMTOL HEALTHCARE      
                      </motion.h1>
          <motion.p className="text-2xl mx-10 flex justify-center font-medium">
          We are a leading healthcare provider offering top-notch medical services.
          </motion.p>
          <motion.p className="text-2xl mx-10 flex justify-center font-medium">
          Our team of expert doctors ensures that you get the best care possible.
          </motion.p>
          <motion.div>
            
          </motion.div>
    </motion.section>
    
    

    <motion.section className="max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
    <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our Mission
                    </motion.h2>
                    <motion.p className="text-2xl mx-10 flex justify-center font-medium">Our mission is to provide compassionate, high-quality healthcare to our community,
    while fostering a culture of respect, integrity, and excellence.
    </motion.p>
    </motion.section>
    <motion.section className="max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
    <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our History
                    </motion.h2>
                    <motion.p className="text-2xl mx-10 flex justify-center font-medium">
      Established in 1990, our healthcare organization has been serving the community
      with dedication and care. Over the years, we have expanded our services and facilities
      to meet the evolving needs of our patients.
      </motion.p>

      </motion.section>
      <motion.section className=" grid max-w-4xl mx-auto py-8 gap-3"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
    
    <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Meet Our Team
                    </motion.h2>  
    <div className="flex gap-6  px-4 py-4 mx-8">
        <motion.div 
        className="bg-slate-500 flex flex-col"
        initial={{scale:0.9, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{delay:1.4, duration:1}}
        >
          
            <Image src={Mydom} width={200} height={200} className="mx-2 p-2 rounded-[50%] border-r-8"/>
        
            <h3 className=" text-2xl font-extrabold">Dr. Akin Adeboye</h3>
            <p className="text-xl font-medium px-3">Chief Medical Officer</p>
            <p className="flex justify-center font-medium text-2xl px-2 ">Specializes in family medicine and patient care.</p>
        </motion.div>
        <motion.div 
        className="bg-slate-500 flex flex-col"
        initial={{scale:0.9, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{delay:1.4, duration:1}}
        >
        <Image src={Mydon} width={200} height={200} className="mx-2 p-2 rounded-[50%] border-r-8"/>
            <h3 className="text-2xl font-extrabold">Dr. Segun Okeowo</h3>
            <p className="text-xl font-medium px-16">Surgeon</p>
            <p className="flex justify-center font-medium text-2xl px-2">Expert in minimally invasive surgery techniques.</p>
        </motion.div>
        <motion.div 
        className="bg-slate-500 flex flex-col"
        initial={{scale:0.9, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{delay:1.4, duration:1}}
        >
        <Image src={Mydoo} width={200} height={200} className="mx-2 p-2 rounded-[50%] border-r-8"/>
            <h3 className="text-2xl font-extrabold">Dr. Justina Fagbemi</h3>
            <p className="text-xl font-medium px-24">Pediatrician</p>
          <p className="flex justify-center font-medium text-2xl px-2">Dedicated to providing care for children and adolescents.</p>
        </motion.div>
    </div>
    </motion.section>
    <motion.section className="max-w-4xl mx-auto py-8"
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1}}
                    >
            <motion.h2 className="flex justify-center font-semibold py-4 mx-[30%] text-2xl text-blue-600"
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:1, duration:0.8}}
                    >Our Values
                    </motion.h2>
            <motion.ul 
            className="flex justify-around text-2xl "
                    initial={{opacity:1, y:-10}}
                    animate={{op:1, y:1}}
                    transition={{delay:1.5, duration:0.8}}>
              <Link href="#" className=" hover:text-blue-600">Compassion</Link>
              <Link href="#" className=" hover:text-blue-600">Integrity</Link>
              <Link href="#" className=" hover:text-blue-600">Excellence</Link>
              <Link href="#" className=" hover:text-blue-600">Innovation</Link>          
              </motion.ul>
     </motion.section>
    </main>
  );
}
 