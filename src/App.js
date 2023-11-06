import { Home, About, Trabajos } from './views/index'
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
        <About />
        <Trabajos />
      </div>
    </ThemeProvider>
  )
}

export default App