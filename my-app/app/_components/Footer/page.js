import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
      <footer className="flex justify-center text-xl items-center text-white font-normal p-2 bg-background rounded-2xl mx-16">
        <section className="">
        <p>&copy; 2024 Healthcare Organization. All rights reserved.</p>
        <p>Find me on <Link href="#" className="text-blue-200 hover:text-blue-500">GitHub</Link> | </p> <Link href="#" className="text-blue-200 hover:text-blue-500"> LinkedIn</Link> | <Link href="#" className="text-blue-200 hover:text-blue-500"> X </Link> | <Link href="#" className="text-blue-200 hover:text-blue-500"> Facebook </Link> | <Link href="#" className="text-blue-200 hover:text-blue-500">Instagram</Link>
        <p>Phone: (+234) 806-127-3323</p>
        <p>Email: fabiyidanieldamilola@healthcare.org</p>
        </section>
      </footer>
    );
  }
  