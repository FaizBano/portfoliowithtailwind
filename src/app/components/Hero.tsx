import React from 'react'
import "aos/dist/aos.css";
import Image from 'next/image';


const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <img src="/pic3.jpg" alt="Hero" className="w-32 h-32 rounded-full mx-auto" />
        <h1 className="bg-black text-4xl text-white font-bold mt-4">Welcome to My Site</h1>
        <h2 className="text-4xl text-white font-bold mt-4">I am Faiz Bano</h2>
        <p className="bg-black text-lg mt-2 text-white">Frontend Developer</p>
      </div>
    </section>
                      
                                       
                             
                       
  )
}

export default Hero
