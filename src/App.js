import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accomodation from './pages/Accomodations'
import Error from './pages/Error.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
