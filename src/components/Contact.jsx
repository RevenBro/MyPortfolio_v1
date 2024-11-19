import { CONTACT_DETAILS } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl ">Get In Touch</h2>
        <div className="text-center tracking-tighter ">
            <p className="my-4 ">{CONTACT_DETAILS.address}</p>
            <a href="tel:+998334845656" className="my-4 block">{CONTACT_DETAILS.phoneNumber}</a>
            <a href="mailto:saidakbarov077@gmail.com" className="my-4 border-b">{CONTACT_DETAILS.email}</a>
        </div>
    </div>
  )
}

export default Contact