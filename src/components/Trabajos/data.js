import HealTech from './healtech.png'
import Videogames from './videogames.png'
import RickandMorty from './RickandMorty.png'
import Portafolio from './Portafolio.png'
import Gif from './typing-kyle-broflovski.gif'

export const trabajos = [
  {
    id: 1,
    img: HealTech,
    title: 'Healtech Gym',
    description:
      'La aplicación Healtech es nuestro proyecto final, que simula el trabajo en equipo en el mundo real y sirve como evaluación final en el Bootcamp de Soy Henry. Para este proyecto, utilizamos ReactJS, Zustand, Material UI, Firebase, Stripe, Axios, Express, NodeJs, TypeScript (backend), JavaScript (frontend), Postgres y Sequelize. Esta aplicación es totalmente responsiva y tiene su propio backend (BFF).',
    urlDeploy: 'https://healtech.tech/',
    urlCode: 'https://github.com/David-Rodriguez-1/henry-pf',
    demo: 'https://youtu.be/qaqLtR0j6Ng'
  },
  {
    id: 2,
    img: Videogames,
    title: 'Videogames',
    description:
      'La aplicación Videogames fue un proyecto evaluado con fines educativos, desarrollado como parte de mi viaje en Soy Henry Bootcamp. En este proyecto, utilicé ReactJS, Redux, CSS-Modules, Express, NodeJs, Postgres, Sequelize y Axios para obtener datos de la API pública de rawg.io. Esta aplicación es totalmente responsiva y tiene su propio backend (BFF).',
    urlDeploy: 'https://videogames-prod.vercel.app',
    urlCode: 'https://github.com/David-Rodriguez-1/PI-Videogames-main',
    demo: 'undefined'
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
    urlCode: 'https://github.com/David-Rodriguez-1/App-Rick-And-Morty',
    demo: 'undefined'
  },
  {
    id: 4,
    img: Portafolio,
    title: 'Portafolio personal',
    description:
      'Mí portafolio personal esta hecho solo con tecnologías front como React.js, Module-css y librerías como tailwind y otras para animaciones. Está totalmente responsiva para todo tipo de resoluciones',
    urlDeploy: 'https://david-rodriguez-dev.vercel.app/',
    urlCode: 'https://github.com/David-Rodriguez-1/portafolioDevDR',
    demo: 'undefined'
  },
  {
    id: 5,
    img: Gif,
    title: 'Freelancers Social App',
    description: [
      'Actualmente estoy trabajando en una app web dedicada a los freelance del mundo IT en donde los talentos pueden volcar todos sus proyectos, ideas y aportes para la comunidad. la aplicación es una red social en donde se registraran empresas y recruiters para aumentar la posibilidad de contratos.',
      <br />,
      'En este caso estoy trabajando de forma individual, poniendome nuevos desafios como aprender a trabajar con MongoDB para una base de datos mas escalable.',
      <br />,
      'Para lo demas serán tecnologías ya mencionadas en proyectos anteriores.',
      <br />,
      'A seguir trabajando...'
    ],
    urlDeploy: 'https://david-rodriguez-dev.vercel.app/',
    urlCode: 'https://github.com/David-Rodriguez-1/portafolioDevDR',
    demo: 'undefined'
  }
]
