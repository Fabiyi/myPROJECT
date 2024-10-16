
import React from 'react';


export default function Container({children}) {
  return (
    <div className=" max-w-[1680px] lg:px-0  px-5 mx-auto ">
        {children}
    </div>
  )
}
