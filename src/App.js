import { Home, About, Experience, Trabajos } from './views/index'
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Trabajos />
      </div>
    </ThemeProvider>
  )
}

export default App
