import style from './Tecnologias.module.css'

export default function Tecnologias() {
    return (
      <div className={style.containerTec}>
        <ul className={style.ulTec}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>REDUX</li>
          <li>EXPRESS</li>
          <li>NODE</li>
          <li>SQL</li>
          <li>POSTGRES</li>
        </ul>
      </div>
    );
}