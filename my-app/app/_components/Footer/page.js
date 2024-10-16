import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
      <footer className="flex justify-center items-center text-white font-normal m- p-1 bg-background ">
        <section className="align-middle">
        <p>Address: No 19 Akindoyin St, Ikenne Remo,Ogun State, ZIP</p>
        <p>Phone: (+234) 806-127-3323</p>
        <p>Email: fabiyidanieldamilola@healthcare.org</p>
        <p>&copy; 2024 Healthcare Organization. All rights reserved.</p>
        <p>Find me on <Link href="#" className="text-blue-200 hover:text-blue-500">GitHub</Link> | </p> <Link href="#" className="text-blue-200 hover:text-blue-500"> LinkedIn</Link> | <Link href="#" className="text-blue-200 hover:text-blue-500"> X </Link> | <Link href="#" className="text-blue-200 hover:text-blue-500"> Facebook </Link> | <Link href="#" className="text-blue-200 hover:text-blue-500">Instagram</Link>
        </section>
      </footer>
    );
  }
  