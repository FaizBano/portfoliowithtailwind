import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 items-center'>
        <div>
          <h2 className='text-4xl md:text-5x' data-aos="zoom-in-up"><u> Technologies I work with</u></h2>
          <p className='text-gray-500 pt-2 justify-normal'>I am new in Information Technology field up till now I can work in
            Ms.Office,Typescript, HTML, CSS,and I am perfect in all above skills 
            and right now I am learning next.js from GIAiC 
            </p>
        </div>        
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Ms.Office</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
            <div className='space-y-3'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">react.js</h2>
              <h2 data-aos="zoom-in-up">next.js</h2>
            </div>

          </div>
        </div>
      </div>
    </div> 
  )
}

export default skills