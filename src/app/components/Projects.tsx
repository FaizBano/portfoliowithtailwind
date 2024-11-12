import React from 'react'

import Heading from './Heading'

import Card from './Card'

const data =[
  {
    id:0,
    title:"My Projects",
    desc:"I prepare this project in next.js with the help of HTML and CSS and tailwind.css, a little effort toward programming",
    img: "/p.png",
    tags: ["Read More"]

},
{
  id:1,
  title:"My Projects",
  desc:"I prepare this project with the help of HTML and CSS, a little effort toward programming",
  img: "/p3.png",
  tags: ["Read More"]

},
{
  id:2,
  title:"My Projects",
  desc:"I prepare this project with the help of HTML and CSS, a little effort toward programming",
  img: "/p2.png",
  tags: ["Read More"]

},

{
  id:3,
  title:"My Projects",
  desc:"A figma project given by our Class Teacher prepared with the help of CSS, a little effort toward programming",
  img: "/pic.png",
  tags: ["Read More"]

},   

]

const Projects = () => {
  return (
  <div id='projects' className='container pt-32 font-bold text-center '>
  <Heading title = "My Projects"  /> 
  <div className='mt-0 bg-black grid gap-10 xl:gap-0 xl: gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center  '>
    {data.map((el) =>(<Card 
    key={el.id}
    title = {el.title} 
    img = {el.img}
    desc = {el.desc}
    tags ={el.tags}
    />))}
  </div>
    </div>
  )
}

export default Projects