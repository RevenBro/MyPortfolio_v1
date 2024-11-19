import React from 'react'
import { PROJECTS } from '../constants'
import Logo from "../assets/images/logo.png"

const Projects = () => {
  return (
    <div className='border-b pb-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap md:justify-center'>
              <div className='w-full md:w-1/4'>
                <img className='mb-6 rounded' src={Logo} alt={project.title} width={150} height={150}/>
              </div>
              <div className="w-full max-w-xl md:w-3/4">
                <h6 className='mb-2 font-semibold '>{project.title}</h6>
                <p className='mb-4 text-neutral-400 '>{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400' key={index}>{tech}</span>
                ))}
              </div>
            </div>
        ))}
    </div>
  )
}

export default Projects