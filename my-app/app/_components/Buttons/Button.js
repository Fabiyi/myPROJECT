import React from 'react'

export default function Buttons({ text, nav, orange }) {
  return (
    <button
      className={`py-4 px-2 rounded-lg font-[500] relative lg:w-fit ${
        nav ? "w-[50%] hover:before:bg-black" : "hover:after:bg-slate-600"
      } ${
        orange ? "bg-[#ff8a01]  text-white" : "bg-white text-foreground"
      }`}
    >
      {text}
    </button>
  );
}

