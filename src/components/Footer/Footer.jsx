import Logo from '../Home/img/LogoDev3.svg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const copyR = new Date().getFullYear()
export const Footer = () => {
    return (
      <footer className="w-auto bg-slate-800 mt-6 footer items-center justify-center p-3 text-neutral-content">
        <aside className="items-center grid-flow-col">
          <img style={{ width: '36px' }} src={Logo} alt="David Dev" />
          <p>Copyright © { copyR } - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 justify-center w-full">
          <button className="btn btn-ghost">
            <a target="blank" href="https://github.com/David-Rodriguez-1">
              <FaGithub />
            </a>
          </button>
          <button className="btn btn-ghost">
            <a
              target="blank"
              href="https://www.linkedin.com/in/david-rodr%C3%ADguez-810434184/">
              <FaLinkedin />
            </a>
          </button>
          <button className="btn btn-ghost">
            <a
              target="blank"
              href="mailto:ezequiel-07@hotmail.com?subject=Solicitud de contacto&body=Hola David, Me gustaría poder hablar contigo...">
              <IoIosMail />
            </a>
          </button>
        </nav>
      </footer>
    )
}