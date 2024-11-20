import { CONTACT_DETAILS } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-10 text-center text-4xl ">Get In Touch</motion.h2>
        <div className="text-center tracking-tighter ">
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="my-4 ">{CONTACT_DETAILS.address}</motion.p>
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} href="tel:+998334845656" className="my-4 block">{CONTACT_DETAILS.phoneNumber}</motion.a>
            <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 2}} href="mailto:saidakbarov077@gmail.com" className="my-4 block">{CONTACT_DETAILS.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact