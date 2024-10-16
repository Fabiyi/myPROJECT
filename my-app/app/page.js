import React from "react";
import Image from "next/image";
import Buttons from "./_components/Buttons/Button";
import Container from "./_components/Container";

import Mydoc from "./Images/Doctor1.jpg";
import Mydod from "./Images/Doctor2.jpg";



export default function Home() {
  return (
    <div>
      <section className="bg-background">
        <Container>
            <div className="flex flex-row">
                  
              <div className=" h-[90vh] flex justify-between px-50"> 
                       
                       <h1 className={`text-white text-4xl font-extrabold w-[50%] lg:text-7xl px-20 py-8 lg:font-black font-[family-name:var(--heading-font)]`}> Consult a Doctor Anytime, anywhere By video call</h1>  
                        <div className="hidden lg:block lg:w-[2/5] lg:h-full w-fit lg:py-20 lg:overflow-hidden px-8">
                        <Image src={Mydoc} width={600} height={500}/>
                        </div>
                      
                      
              </div>
            </div>
        </Container>
          <Container>
            <section className="flex flex-col px-9 py-1 gap-8">
              <p className="text-white  text-lg">Borem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Sociis ipsum posuere pharetra odio aliquam porta congue.<br/> 
              In tincidunt sed sagittis cum ac. <br/>Porttitor vitae dictum eget neque blandit venenatis justo.</p>
              <Buttons text='Ask a Doctor Online' orange />
            </section>
          </Container>
      </section>

      <section className="bg-white flex">
        <Container>
          <div className="flex flex-row">
            <div className="hidden lg:block lg:w-[3/5] lg:h-full w-fit lg:py-20 lg:overflow-hidden px-8">
              <Image src={Mydoc} width={500} height={100}/>
            </div>
              <h2 className="text-2xl p-60 font-bold">  This is the joy of a Doctor</h2>
          </div>
        </Container>
      </section>
      <section className="bg-white flex">
        <Container>
          <div className="flex flex-row">
                
              <h2 className="text-2xl p-40 font-bold">  This is the joy of a Doctor</h2>
            <div className="hidden lg:block lg:w-[1/5] lg:h-full w-fit lg:py-20 lg:overflow-hidden px-8">
              <Image src={Mydod} width={500} height={100}/>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}


