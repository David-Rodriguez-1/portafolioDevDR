import style from './Tecnologias.module.css'

const tecnologias = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'REDUX',
  'EXPRESS',
  'NODE',
  'SQL',
  'POSTGRES'
]

export default function Tecnologias() {
  return (
    <>
      <div className={style.main}>
      <div className={style.scrollContainer}>
        {tecnologias.map((item, index) => (
          <div key={index} className={style.scrollItems}>
            {item}
          </div>
        ))}
      </div>
        </div>
        </>
    )
}