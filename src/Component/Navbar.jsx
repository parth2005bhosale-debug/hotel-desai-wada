import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth'
    })

    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          हॉटेल देसाई वाडा
        </a>

        {/* Navigation */}
        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
          </li>

          <li>
            <a href="#experiences" onClick={closeMenu}>
              Experiences
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>

        {/* Book Now Button */}
        <button
          className="book-btn"
          onClick={scrollToBooking}
        >
          Book Now
        </button>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </nav>
  )
}

export default Navbar