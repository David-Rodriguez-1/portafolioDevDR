import backimg from "./img/back-image.svg";
import menu from "./img/menu.svg";
import modo from "./img/modo.svg";
import linkedin from "./img/linkedin.svg";
import gitHub from "./img/git-hub.svg";
import arrowRigth from "./img/arrow-right.svg";
import style from "./home.module.css";
import Logo from './img/El texto del párrafo.svg'

export default function Home() {
  return (
    <main className={style.container}>
      <img className={style.logo} src={Logo} alt="" />
      <nav className={style.navMenu}>
        <button className={style.btnModo}>
          <img src={modo} alt="modo"/>
        </button>
        <button className={style.btnMenu}>
          <img src={menu} alt="menu" />
        </button>
      </nav>
      <section className={style.section}>
        <img className={style.imgBack} src={backimg} alt="back" />
        <h1 className={style.title}>Hola, soy David Rodríguez</h1>
        <h4 className={style.h4}>Desarrollador web Full-Stack</h4>
        <p className={style.pDescripcion}>
          Un apasionado desarrollador web Full-Stack con un sólido conocimiento
          en el diseño y desarrollo de aplicaciones web.
        </p>
      </section>
      <button className={style.btnContacto}>
        <span>Contactame</span> <img className={style.imgArrow} src={arrowRigth} alt="" />
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
  );
}
