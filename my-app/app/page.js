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
                  <Image src={Mydoc} width={600} height={700}/>
                </div>
                      
                      
              </div>
            </div>
        </Container>
          <Container>
            <section className="flex flex-col px-8 py-2 gap-4 w-[2/5] justify-center">
              <p className="text-white  text-lg">'Regular health checkups are essential for maintaining good health and preventing diseases. They allow for early detection of potential health issues .</p>
              <Buttons text='Ask a Doctor Online' orange />
            </section>
          </Container>
      </section>

      <section className="bg-white flex gap-6 mx-10">
        <Container>
          <div className="flex flex-row justify-center mx-10">
            <div className=" lg:block lg:h-full w-[100%] lg:py-20 lg:overflow-hidden  ">
              <Image src={Mydoc} width={600} height={100}/>
            </div>
              <h2 className="text-xl p-10 font-bold flex items-center ">  A balanced diet is crucial for overall health. It includes a variety of foods from all food groups: fruits, vegetables, proteins, whole grains, and dairy. Learn more about how to make healthier food choices and create a balanced meal plan.</h2>
          </div>
        </Container>
      </section>
      <section className="bg-white flex mx-10 gap-6">
        <Container>
          <div className="flex flex-row items-center mx-auto p-6">
                
              <h2 className="text-xl p-10 font-bold"> Stress management is vital for both mental and physical health.Techniques such as mindfulness, exercise, and talking to a professional can help individuals cope with stress effectively.</h2>
            <div className="lg:block lg:h-full w-[100%] lg:py-20 lg:overflow-hidden">
              <Image src={Mydod} alt="floating images" width={600} height={100} className=" float-left mr-4 mb-2"/>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}


