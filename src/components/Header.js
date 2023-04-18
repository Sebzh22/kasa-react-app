import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Logo from '../assets/LOGO.png'
import '../style/components/Header.scss'

export default function Header() {
  return (
    <header className="Header container">
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="Kasa, location de logement"
            className="Header-logo"
          />
        </Link>
      </div>
      <NavBar />
    </header>
  )
}

