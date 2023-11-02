import style from './About.module.css'

export const About = () =>{
  return (
    <>
      <h2 className={style.h2}>Sobre mi</h2>
      <div className={style.container}>
        <p className={style.p}>
          "Soy un desarrollador web full-stack apasionado con entusiasmo de
          seguir aprendiendo y adquiriendo experiencia en el mundo IT. Me
          encanta trabajar en proyectos desafiantes y aprender nuevas
          tecnologías. Mi objetivo es aportar a la comunidad de forma
          profesional y ayudar a las empresas a alcanzar sus objetivos. Tengo
          experiencia en el desarrollo de aplicaciones web utilizando las
          siguientes tecnologías..."
        </p>
      </div>
    </>
  )
}
