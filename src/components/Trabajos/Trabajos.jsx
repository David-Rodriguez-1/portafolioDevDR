import style from './Trabajos.module.css'
// import {HealTech} from '../../../public/Images/Captura de pantalla 2023-11-03 113824.png'

export const Trabajos = () => {
  return (
    <div className={style.trabajos_Container}>
      <h2 className={style.h2}>Mis trabajos recientes</h2>
      <section>
        <article>
          <img
            src="./healtech.png"
            alt="Healtech.tech"
          />
        </article>
      </section>
    </div>
  )
}
