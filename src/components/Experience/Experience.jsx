import style from './Experience.module.css'
import { BiCodeAlt, BiCodeCurly } from 'react-icons/bi'
import {SiAltiumdesigner} from 'react-icons/si'




export const Experience = () => {
  return (
      <main className={style.container}>
        <article className={style.contain}>
          <section className={style.section1}>
            <BiCodeAlt className={style.img_icon} />
            <h3>Frontend Developer</h3>
            <p>
              Me gusta codificar cosas desde cero, como también los desafios de
              buscar errores, mejorar la calidad del código y disfruto dando
              vida a las ideas en el navegador.
            </p>
            <p style={{ color: '#28FA0A' }}>Lenguajes y tecnologías:</p>
          <p>HTML
            <br />
            CSS
            <br />
            JavaScript
            <br />
            React
            <br />
            Redux
            <br />
            Zustand</p>
            <p style={{ color: '#28FA0A' }}>Herramientas de desarrollo:</p>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Vercel</li>
              <li>Vite</li>
            </ul>
          </section>
          <section className={style.section2}>
            <BiCodeCurly className={style.img_icon} />
            <h3>Backend Developer</h3>
            <p>
              Me gusta el manejo de datos y su trasfondo para llegar al cliente
              con su búsqueda y protección de datos, código limpio y escalable.
            </p>
            <p style={{ color: '#28FA0A' }}>Lenguajes</p>
            <p>JavaScript(NodeJS)</p>
            <p style={{ color: '#28FA0A' }}>Herramientas de desarrollo:</p>
            <ul>
              <li>Express.js</li>
              <li>Sequelize</li>
            </ul>
            <p style={{ color: '#28FA0A' }}>
              Sistema de gestión de bases de datos:
            </p>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </section>
          <section className={style.section3}>
            <SiAltiumdesigner className={style.img_icon} />
            <h3>Designer</h3>
            <p>
              Valoro la estructura de contenido simple, los patrones de diseño
              limpios y las interacciones bien pensadas.
            </p>
            <p style={{ color: '#28FA0A' }}>Cosas que disfruto diseñando:</p>
          <p>UX UI
            <br />
            Web
            <br />
            Aplicaciones
            <br />
            Logotipos</p>
            <p style={{ color: '#28FA0A' }}>Herramientas de diseño:</p>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
              <li>Papel y lápiz</li>
            </ul>
          </section>
        </article>
      </main>
  )
}
