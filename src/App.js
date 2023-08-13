import Home from './components/home/home'
import About from './components/About/About';
import Tecnologias from './components/Tecnologias/Tecnologias';
import BotonCV from './components/Boton-CV/BotonCV';
import './App.css'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Tecnologias />
      <BotonCV/>
    </div>
  );
}

export default App;
