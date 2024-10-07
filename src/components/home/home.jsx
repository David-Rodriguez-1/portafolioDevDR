import arrowRigth from './img/arrow-right.svg'
import style from './home.module.css'
import { IoMailOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin } from 'react-icons/fa'



export const Home = () => {
  return (
    <main className={style.main}>
      <section className={style.section}>
        <h1 className="animate-fade-down animate-duration-2000 animate-ease-in pt-14">
          Hola,
          <br />
          Soy <span className={style.textFullStack}> David </span>
        </h1>
        <h2 className={style.h4}>
          Desarrollador web{' '}
          <span className={style.textFullStack}>Full-Stack</span>
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
              <a href="https://github.com/David-Rodriguez-1" target="blank">
                <FaGithub />
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
