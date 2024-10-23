"use client"
import Link from "next/link";
import Container from "../Container";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Buttons from "../Buttons/Button";
import Image from "next/image";
import Mydok from "../logo.png";
import {motion} from "framer-motion";


export default function Navbar() {
    const [Display, setDisplay] = useState(false);
    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
        {name: 'Contact', path: '/contact'},
        {name: 'Appointment', path: '/appointment'},
    ];
    return(

        <motion.nav className="bg-gray-800 p-4 fixed top-0 w-full z-10" 
        initial={{opacity:0, y:-50}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.8}}
        >
        <div className="container mx-auto flex justify-between items-center">
        <Image src={Mydok} width={50} height={50} className="bg-white rounded-2xl"/>
        <Link href="/"> <a className="text-white text-2xl font-bold">Mylogo</a></Link>
        
        <Buttons
        onClick={() =>
            setDisplay(!Display)}
            className="text-white block lg:hidden focus:outline-none">
            <svg className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
        </Buttons>

        {/*Links for Large screens */}

        <motion.div className="hidden lg:flex space-x-6 text-white"
                    initial={{opacity:0, x: 50}}
                    animate={{opacity:1, x:0}}
                    transition={{duration: 0.8, delay: 0.3}}>
                    {links.map((link)=> (
                        <Link
                        key={link.name} href={link.path} className="hover:text-gray-400">
                            {link.name} 
                        </Link>
                    ))}
         </motion.div>

        {/* moblie menu */}
         {Display && (
              <motion.div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white"
                          initial={{height:0, opacity:0}}
                          animate={{height:'auto', opacity:1}}
                          exit={{height:0,opacity:0}}
                          transition={{duration:0.5}}
                          >
                        <ul className="flex flex-col items-center">
                            {links.map((link) =>(
                                <li key={link.name} className="py-2">
                                   <Link href={link.path} onClick={() =>setDisplay(false)} className="hover:text-gray-400">
                                        {link.name}
                                   </Link> 
                                </li>
                            ))}

                        </ul>  
              </motion.div>
         )}
       
        </div>
        </motion.nav>     
    );
}







