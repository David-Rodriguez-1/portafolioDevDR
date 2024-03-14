import backimg from './img/back-image.svg'
import arrowRigth from './img/arrow-right.svg'
import style from './home.module.css'
import Logo from './img/LogoDev3.svg'
import { IoMailOutline } from 'react-icons/io5'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export const Home = () => {
  return (
    <main>
      <img className={style.logo} src={Logo} alt="" />
      <nav className={style.navMenu}></nav>
      <section className={style.section}>
        <img className={style.imgBack} src={backimg} alt="back" />
        <h1 class="animate-fade-down animate-duration-2000 animate-ease-in">
          Hola, soy David Rodríguez
        </h1>
        <h2 className={style.h4}>
          Desarrollador web{' '}
          <span class="animate-fade-down animate-duration-2000 animate-ease-in animate-delay-500">
            Full-Stack
          </span>
        </h2>
        <p className={style.pDescripcion}>
          Desarrollador web con un sólido conocimiento en el diseño y desarrollo
          de aplicaciones web.
        </p>
      </section>
      <button
        onClick={() => document.getElementById('my_modal_2').showModal()}
        className={style.btnContacto}>
        <span>Contáctame</span>{' '}
        <img className={style.imgArrow} src={arrowRigth} alt="" />
      </button>
      <dialog id="my_modal_2" className="modal border-none">
        <div className="modal-box">
          <h3 className="font-bold text-lg">A un paso de hablar contigo!</h3>
          <p className="py-4">Puedes contactarme por los siguientes medios</p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: '100%',
              justifyContent: 'center'
            }}>
            <h4>
              <a
                href="https://www.linkedin.com/in/david-rodr%C3%ADguez-810434184/"
                target="blank">
                <FaLinkedin />
              </a>
            </h4>
            <h4>
              <a href="mailto:ezequiel-07@hotmail.com?subject=Solicitud de contacto&body=Hola David, Me gustaría poder hablar contigo...">
                <IoMailOutline />
              </a>
            </h4>
            <h4>
              <a
                href="https://www.instagram.com/david_rodriguez7/?next=%2F"
                target="blank">
                <FaInstagram />
              </a>
            </h4>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}></button>
        </form>
      </dialog>
    </main>
  )
}
