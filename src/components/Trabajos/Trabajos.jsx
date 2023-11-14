import style from './Trabajos.module.css'
import HealTech from './healtech.png'
import Videogames from './videogames.png'
import RickandMorty from './RickandMorty.png'

export const Trabajos = () => {
  return (
    <>
      <h2 className={style.h2}>Mis trabajos recientes</h2>
      <div className={style.trabajos_Container}>
        <section className={style.section_container}>
          <article className={style.article_container}>
            <img src={HealTech} alt="healtech.tech" />
            <h4>
              <a href="https://healtech.tech/" target="blank">
                Healtech Gym
              </a>
            </h4>
            <p>
              La aplicación Healtech es nuestro proyecto final, que simula el
              trabajo en equipo en el mundo real y sirve como evaluación final
              en el Bootcamp de Soy Henry. Para este proyecto, utilizamos
              ReactJS, Zustand, Material UI, Firebase, Stripe, Axios, Express,
              NodeJs, TypeScript (backend), JavaScript (frontend), Postgres y
              Sequelize. Esta aplicación es totalmente responsiva y tiene su
              propio backend (BFF).
            </p>
          </article>
          <article className={style.article_container}>
            <img src={Videogames} alt="healtech.tech" />
            <h4>
              <a
                href="https://github.com/David-Rodriguez-1/PI-Videogames-main"
                target="blank">
                Videogames
              </a>
            </h4>
            <p>
              La aplicación Videogames fue un proyecto evaluado con fines
              educativos, desarrollado como parte de mi viaje en Soy Henry's
              Bootcamp. En este proyecto, utilicé ReactJS, Redux, CSS-Modules,
              Express, NodeJs, Postgres, Sequelize y Axios para obtener datos de
              la API pública de rawg.io. Esta aplicación es totalmente
              responsiva y tiene su propio backend (BFF).
            </p>
          </article>
          <article className={style.article_container}>
            <img src={RickandMorty} alt="RickAndMorty" />
            <h4>
              <a
                href="https://github.com/David-Rodriguez-1/App-Rick-And-Morty"
                target="blank">
                Rick & Morty
              </a>
            </h4>
            <p>
              La aplicación de Rick y Morty fue desarrollada con fines
              educativos como parte de mi viaje en el Bootcamp de Soy Henry.
              Para este proyecto, utilicé ReactJS, Redux, CSS-Modules y Axios
              para obtener datos de la API pública de Rick and Morty. El backend
              está actualmente en desarrollo y las credenciales de inicio de
              sesión son las siguientes: <br />
              <strong style={{ backgroundColor: 'transparent' }}>
                correo electrónico:{' '}
              </strong>{' '}
              admin@admin.com <br />
              <strong style={{ backgroundColor: 'transparent' }}>
                contraseña:{' '}
              </strong>{' '}
              Admin123.
            </p>
          </article>
        </section>
      </div>
    </>
  )
}
