import React from 'react'

import { MdEmail } from "react-icons/md";
import { FaPhone  } from "react-icons/fa";


const Contacts = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10 '>
            <div className='space-y-2'>
                <h2 className='text-4xl' data-aos="zoom-in-up"><b>Keep in Touch</b></h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                  please contact me through Email or message
                </p>

                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    < MdEmail size={30} /> faizbano02@gmail.com
                    </div>
                    <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                    < FaPhone size={30} data-aos="zoom-in-up"/> 0300-2700184 
                       </div>
                    </div>
                    
                    <div className='space-y-8'>
                      <div className='flex flex-col gap-1 '>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                        className='h-[40px] bg-transparent border  border-accent' 
                        id='name'/>
                        
                         </div>

                         
                      <div className='flex flex-col gap-1 ' data-aos="zoom-in-up">
                        <label htmlFor='email'>Email</label>
                        <input type='text'
                        className='h-[40px] bg-transparent border  border-accent' 
                        id='email'/>
                        
                         </div>
                         <div className='flex flex-col gap-1 ' data-aos="zoom-in-up">
                        <label htmlFor='msg'>Message.</label>
                        <textarea
                        className=' bg-transparent border  border-accent' 
                        id='msg' rows={8}>
                          </textarea>                                           
                         </div>
                         <button className='bg-accent p-2 px-8 ' data-aos="zoom-in-up"> Send</button>

                    </div>

         
        </div>
    </div>
  ) 
}

export default Contacts