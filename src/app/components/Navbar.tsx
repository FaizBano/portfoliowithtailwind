import React from 'react'
import Link from 'next/link';
import { MdOutlineMenuBook } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center '>
        <div className='text-xl font-medium'> 
         
        </div>
        
    <ul className='flex gap-10'>
    <MdOutlineMenuBook/>
      <li className='menuLink'><Link href='#hero'>Home</Link></li>
      <li className='menuLink'><Link  href='#about'>About</Link></li>
      <li className='menuLink'><Link href='#projects'>Projects</Link></li>
      <li className='menuLink'><Link href='#contact'>Contact</Link></li>
      <li className='menuLink'><Link  href='#skills'>Skills</Link></li>
      
    </ul>
    
   
        </div>
      
    </div>
  )
}

export default Navbar
