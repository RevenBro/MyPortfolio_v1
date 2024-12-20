import { HERO_CONTENT } from "../constants"
import HeroPic from '../assets/images/logo.jpg'
import { motion } from "framer-motion"

const Hero = () => {
  const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay
      }
    }
  })
  return (
    <div className="border-b border-neutral-900 pb-4 md:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-13 font-thin tracking-tight md:mb-16 md:text-7xl">Abdulloh Saidakbarov</motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-tight text-transparent">Frontend Developer</motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:p-8">
          <div className="flex">
            <motion.img className="rounded" initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.3}} src={HeroPic} alt="This is picture"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero