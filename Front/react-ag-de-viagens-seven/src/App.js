import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Passeios from './components/pages/Passeios'
import Promocoes from './components/pages/Promocoes'
import Contato from './components/pages/Contato'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/passeios" element={<Passeios />}></Route>
            <Route path="/promocoes" element={<Promocoes />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
