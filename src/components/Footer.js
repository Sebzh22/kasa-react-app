import { Link } from 'react-router-dom'
import Logo from '../assets/LOGO-Noir.svg'
import '../style/components/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="Kasa, location de logement"
            className="footer-logo"
          />
        </Link>
      </div>
      <div className="footer-copyright">
        <p>© 2020 Kasa. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer
