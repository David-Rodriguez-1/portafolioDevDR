import { Experience } from '../Experience/Experience'
import style from './About.module.css'

export const About = () =>{
  return (
    <>
      <div className={style.container}>
      <h2 className={style.h2}>Sobre mi</h2>
        <p className={style.p}>
          "Soy un desarrollador web, con entusiasmo de
          seguir aprendiendo y adquiriendo experiencia en el mundo IT. Me
          encanta trabajar en proyectos desafiantes y aprender nuevas
          tecnologías. Mi objetivo es aportar a la comunidad de forma
          profesional y ayudar a las empresas a alcanzar sus objetivos. Tengo
          experiencia en el desarrollo de aplicaciones web utilizando las
          siguientes tecnologías..."
        </p>
      <Experience style={style.experience } />
      </div>
    </>
  )
}
