import Logo from "../assets/images/logo.jpg"
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa"

const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={Logo} alt="Logo"/>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a target="_blank" href="https://linkedin.com">
            <FaLinkedin/>
          </a>
          <a target="_blank" href="https://github.com/RevenBro">
            <FaGithub/>
          </a>
          <a target="_blank" href="https://t.me/Saidakbarovv_A">
            <FaTelegram/>
          </a>
          <a target="_blank" href="https://ig.me/abdullakh__bro">
            <FaInstagram/>
          </a>
            
            
            
        </div>
    </nav>
  )
}

export default Header