import { Experience } from '../Experience/Experience'
import style from './About.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {
  AOS.init()
  return (
      <div className={style.container}>
        <h2
          className={style.h2}
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="850"
          data-aos-duration="500">
          Sobre mi
        </h2>
      <p
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-duration="1500"
          className={style.p}>
          "Soy un desarrollador web, con entusiasmo de seguir aprendiendo y
          adquiriendo experiencia en el mundo IT. Me encanta trabajar en
          proyectos desafiantes y aprender nuevas tecnologías. Mi objetivo es
          aportar a la comunidad de forma profesional y ayudar a las empresas a
          alcanzar sus objetivos. Tengo experiencia en el desarrollo de
          aplicaciones web utilizando las siguientes tecnologías..."
        </p>
        <Experience data-aos="fade-up" style={style.experience} />
      </div>
  )
}
