import '../style/components/NavBar.scss'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link" activeclassname="active">
        Accueil
      </NavLink>
      <NavLink to="/About" className="nav-link" activeclassname="active">
        A Propos
      </NavLink>
    </nav>
  )
}

