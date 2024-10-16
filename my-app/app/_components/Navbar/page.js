'use client'
import Link from "next/link";
import Container from "../Container";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Buttons from "../Buttons/Button";
import Image from "next/image";







export default function Navbar() {
    const [display, setDisplay] = useState(false);
   

    return(
        <header className=" flex items-center justify-between bg-background px-3 py-10 relative">
            <Container>

                    
                    
                    
                <div className="flex items-center justify-between">

                   
                    <div className="text-[#f4f4f4] font-extrabold text-xl">
                    {/* <Image src={Mydoc} width={500} height={100}/> */}
                    </div>
                   
                   
                    <nav className={`absolute left-0 top-[108px] w-full  bg-black opacity-90 h-[70vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
                        !display ? "hidden": ""
                        }`}
                        > 
                        <ul className="flex flex-col justify-center items-center h-full gap-2 text-xl font-extrabold text-[#f4f4f4] lg:flex-row lg:w-fit lg:gap-20">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/appointment">Appointment</Link>
                            </li>
                                <Buttons text="Request a call"/>
                        </ul>
                    </nav>
                    
                </div>
               
            </Container> 
        </header>
    )
 
}


    