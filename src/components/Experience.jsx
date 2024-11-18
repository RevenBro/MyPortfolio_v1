import React from 'react'
import { EXPERIENCE } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='py-20 text-center text-4xl'>Experience</h2>
        <div>{EXPERIENCE.map((exp, index) => (
            <div key={index} className='mb-8 flex flex-wrap md:justify-center'>
                <div className='w-full md:w-1/4 '>
                    <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                </div>

                <div className='w-full max-w-xl md:w-3/4'>
                    <h6 className='mb-2 font-semibold '>
                        {exp.role} - 
                        <span className='text-sm text-purple-100'> {exp.company}</span>
                    </h6>
                    <p className='mb-4 text-neutral-400 '>{exp.description}</p>
                    {exp.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>{tech}</span>
                    ))}
                </div>
            </div>
        ))}</div>
    </div>
  )
}

export default Experience