'use client'
import Link from "next/link";
import Container from "../Container";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Buttons from "../Buttons/Button";
import Image from "next/image";
import Mydok from "../logo.jpg";







export default function Navbar() {
    const [display, setDisplay] = useState(false);
   

    return(
        <header className=" flex items-center justify-between bg-background px-3 py-10 relative">
            <Container>

                    
                    
                    
                <div className="flex  flex-row items-center justify-between gap-x-16">

                   
                    <div className="flex  text-[#f4f4f4] font-extrabold text-xl">
                    <Image src={Mydok} width={100} height={100} className="px-2 bg-white rounded-[50%]"/> 
                    
                    </div>
                   
                   
                    <nav className={`absolute left-0 top-[108px] w-full rounded-sm opacity-90 h-[70vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
                        !display ? "hidden" : ""
                        }`}
                        > 
                        <ul className="flex flex-col justify-center items-center h-full gap-2 text-xl font-extrabold text-[#f4f4f4] lg:flex-row lg:w-fit lg:gap-20">
                            <li>
                                <Link href="/" className="hover:opacity-50">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:opacity-50">About</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:opacity-50">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:opacity-50">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/appointment" className="hover:opacity-50">Appointment</Link>
                            </li>
                                <Buttons text="Request a call" className=" "/>
                        </ul>
                    </nav>
                    
                </div>
               
            </Container> 
        </header>
    )
 
}


    