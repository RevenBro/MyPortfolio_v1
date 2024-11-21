import AboutPic from '../assets/images/about-logo.webp';
import { ABOUT_ME } from '../constants';
import { motion } from 'framer-motion';

const about = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h2 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full md:w-1/2 md:p-8">
                <div className="flex items-center justify-center">
                    <img loading='lazy' className='rounded-2xl' src={AboutPic} alt="About Me" width={350} height={350}/>
                </div>
            </motion.div>

            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full md:w-1/2">
                <div className="flex justify-center md:justify-start">
                    <p className='my-2 max-w-xl py-6'>{ABOUT_ME}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default about