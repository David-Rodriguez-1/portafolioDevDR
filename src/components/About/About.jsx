import style from './About.module.css';
import ImgDev from './imgAbout.svg'

export default function About() {
    return (
      <div className={style.container}>
            <h2 className={style.h2}>Sobre mi</h2>
            <img className={style.imgDev} src={ImgDev} alt="" />
        <p className={style.p}>
          "Soy un desarrollador web full-stack apasionado con entusiasmo de seguir aprendiendo y adquiriendo experiencia en el mundo IT. Me encanta trabajar en proyectos desafiantes y aprender nuevas tecnologías. Mi objetivo es aportar a la comunidad de forma profesional y ayudar a las empresas a alcanzar sus objetivos. Tengo experiencia en el desarrollo de aplicaciones web utilizando las siguientes tecnologías..."
        </p>
      </div>
    );
}
// Si estás buscando un desarrollador web full-stack apasionado y
// comprometido, ¡no dudes en contactarme!"