import {RiReactjsLine, RiJavascriptLine, RiGithubLine  } from "react-icons/ri"
import {TbBrandNextjs, TbBrandTypescript  } from "react-icons/tb"
import { motion } from "framer-motion"

const Technologies = () => {
    const motionVariants = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                 duration: duration,
                 ease: "linear",
                 repeat: Infinity,
                 repeatType: "reverse"
            }
        }
    })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={motionVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiJavascriptLine className="text-5xl text-yellow-300 "/>
            </motion.div>
            <motion.div variants={motionVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-700 p-4">
                <TbBrandTypescript className="text-5xl text-blue-700 "/>
            </motion.div>
            <motion.div variants={motionVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400 "/>
            </motion.div>
            <motion.div variants={motionVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-700 p-4">
                <TbBrandNextjs className="text-5xl "/>
            </motion.div>
            <motion.div variants={motionVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiGithubLine    className="text-5xl  "/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies