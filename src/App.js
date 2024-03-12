import { Home, About, Trabajos, Footer } from './views/index.js'
import { ThemeProvider } from './ThemeContext'
import 'atropos/css'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
        <About />
        <Trabajos />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
