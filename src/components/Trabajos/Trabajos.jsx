import style from './Trabajos.module.css'
import { trabajos } from './data'
import { FaLink } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Trabajos = () => {
  AOS.init()
  return (
    <>
      <h2 className={style.h2}>Mis trabajos recientes</h2>
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
              <h4>{trabajo.title}</h4>
              <p>{trabajo.description}</p>
              <div
                style={{ position: 'relative', width: 'auto' }}
                class="navbar-start">
                <div className="dropdown dropdown-top">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost text-2xl btn-circle">
                    <FaLink />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      {trabajo.urlDeploy !== 'undefined' ? (
                        <a target="blank" href={trabajo.urlDeploy}>
                          Deploy
                        </a>
                      ) : (
                        <del>Deploy</del>
                      )}
                    </li>
                    <li>
                      <a target="blank" href={trabajo.urlCode}>
                        GitHub
                      </a>
                    </li>
                    <li>
                      {trabajo.demo !== 'undefined' ? (
                      <a target="blank" href={trabajo.demo}>
                        Demo
                      </a>
                      ) : (
                          <del>Demo</del>
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
