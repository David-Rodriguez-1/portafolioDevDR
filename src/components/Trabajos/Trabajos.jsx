import style from './Trabajos.module.css'
import { trabajos } from './data'
import { FiGithub } from 'react-icons/fi'
import { FaLink } from 'react-icons/fa6'
import { IoPlayOutline } from 'react-icons/io5'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Trabajos = () => {
  AOS.init()
  return (
    <>
      <h2 className={style.h2}>Mis trabajos recientes</h2>
      <p className={style.introTrabajos}>
        Estos son algunos de los trabajos que tuve la oportunidad de desarrollar
        de forma individual y otros en equipo aplicando lo aprendido en cursos y
        de forma autodidacta
      </p>
      <div className={style.trabajos_Container}>
        <section className={style.section_container}>
          {trabajos.map((trabajo) => (
            <article
              key={trabajo.id}
              data-aos-offset="100"
              data-aos-duration="1500"
              data-aos="fade-up"
              className={style.article_container}>
              <img src={trabajo.img} alt="" />
              <h4 key={trabajo.id}>{trabajo.title}</h4>
              <p>{trabajo.description}</p>
              <div
                style={{ position: 'relative', width: 'auto' }}
                className="navbar-start">
                <div>
                  <ul className={style.container_ul}>
                    <li>
                      {trabajo.urlDeploy !== 'undefined' && (
                        <a target="blank" href={trabajo.urlDeploy}>
                          <FaLink />
                        </a>
                      )}
                    </li>
                    <li>
                      {trabajo.urlCode !== 'undefined' && (
                        <a target="blank" href={trabajo.urlCode}>
                          <FiGithub />
                        </a>
                      )}
                    </li>
                    <li>
                      {trabajo.demo !== 'undefined' && (
                        <a target="blank" href={trabajo.demo}>
                          <IoPlayOutline />
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}
