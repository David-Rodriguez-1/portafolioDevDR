import HealTech from './healtech.png'
import Videogames from './videogames.png'
import RickandMorty from './RickandMorty.png'

export const trabajos = [
  {
    id: 1,
    img: HealTech,
    title: 'Healtech Gym',
    description:
      'La aplicación Healtech es nuestro proyecto final, que simula el trabajo en equipo en el mundo real y sirve como evaluación final en el Bootcamp de Soy Henry. Para este proyecto, utilizamos ReactJS, Zustand, Material UI, Firebase, Stripe, Axios, Express, NodeJs, TypeScript (backend), JavaScript (frontend), Postgres y Sequelize. Esta aplicación es totalmente responsiva y tiene su propio backend (BFF).',
    urlDeploy: 'https://healtech.tech/',
    urlCode: 'https://github.com/David-Rodriguez-1/henry-pf'
  },
  {
    id: 2,
    img: Videogames,
    title: 'Videogames',
    description:
      'La aplicación Videogames fue un proyecto evaluado con fines educativos, desarrollado como parte de mi viaje en Soy Henry Bootcamp. En este proyecto, utilicé ReactJS, Redux, CSS-Modules, Express, NodeJs, Postgres, Sequelize y Axios para obtener datos de la API pública de rawg.io. Esta aplicación es totalmente responsiva y tiene su propio backend (BFF).',
    urlDeploy: 'undefined',
    urlCode: 'https://github.com/David-Rodriguez-1/PI-Videogames-main'
  },
  {
    id: 3,
    img: RickandMorty,
    title: 'Rick and Morty',
    description: [
      'La aplicación de Rick y Morty fue desarrollada con fines educativos como parte de mi viaje en el Bootcamp de Soy Henry. Para este proyecto, utilicé ReactJS, Redux, CSS-Modules y Axios para obtener datos de la API pública de Rick and Morty. El backend está actualmente en desarrollo y las credenciales de inicio de sesión son las siguientes:',
      <br />,
      <strong style={{ backgroundColor: 'transparent' }}>
        correo electrónico:{' '}
      </strong>,
      'admin@admin.com',
      <br />,
      <strong style={{ backgroundColor: 'transparent' }}>contraseña: </strong>,
      'Admin123.'
    ],
    urlDeploy: 'undefined',
    urlCode: 'https://github.com/David-Rodriguez-1/App-Rick-And-Morty'
  }
]
