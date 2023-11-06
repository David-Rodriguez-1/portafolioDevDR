import backimg from "./img/back-image.svg";
import linkedin from "./img/linkedin.svg";
import gitHub from "./img/git-hub.svg";
import arrowRigth from "./img/arrow-right.svg";
import style from "./home.module.css";
import Logo from './img/El texto del párrafo.svg'
import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export const Home = () => {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <main className={darkMode ? style.darkContainer : style.container}>
      <img className={style.logo} src={Logo} alt="" />
      <nav className={style.navMenu}>
        <button onClick={toggleDarkMode} className={style.btnModo}>
          {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
        </button>
      </nav>
      <section className={style.section}>
        <img className={style.imgBack} src={backimg} alt="back" />
        <h1 className={style.title}>Hola, soy David Rodríguez</h1>
        <h2 className={style.h4}>Desarrollador web Full-Stack</h2>
        <p className={style.pDescripcion}>
          Un apasionado desarrollador web Full-Stack con un sólido conocimiento
          en el diseño y desarrollo de aplicaciones web.
        </p>
      </section>
      <button className={style.btnContacto}>
        <span>Contactame</span>{' '}
        <img className={style.imgArrow} src={arrowRigth} alt="" />
      </button>
      <div className={style.btnContain}>
        <button className={style.btnLinkedin}>
          <img src={linkedin} alt="linkedin" />
        </button>
        <button className={style.btnGit}>
          <img src={gitHub} alt="gitHub" />
        </button>
      </div>
    </main>
  )
}
