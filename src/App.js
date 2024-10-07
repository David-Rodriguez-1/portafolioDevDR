import { Home, About, Trabajos, Footer } from './views/index.js'
import { ThemeProvider } from './ThemeContext'
import 'atropos/css'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="max-w-screen-2xl mx-auto">
          <Home />
          <About />
          <Trabajos />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
