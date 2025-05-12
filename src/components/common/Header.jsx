import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Menangani scroll untuk mengubah warna header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-primary text-xl font-bold">
            <FaHeartbeat className="text-2xl" />
            <span>Peduli Sehat</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-primary' : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/#features"
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-primary' : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                Fitur
              </NavLink>
              <NavLink
                to="/detection"
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-primary' : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                Deteksi Penyakit
              </NavLink>
              <NavLink
                to="/#testimonials"
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-primary' : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                Testimoni
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-primary' : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                Tentang Kami
              </NavLink>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Masuk
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Daftar
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-primary text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4 mb-6">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `font-medium py-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </NavLink>
            <NavLink
              to="/#features"
              className={({ isActive }) => 
                `font-medium py-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Fitur
            </NavLink>
            <NavLink
              to="/detection"
              className={({ isActive }) => 
                `font-medium py-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Deteksi Penyakit
            </NavLink>
            <NavLink
              to="/#testimonials"
              className={({ isActive }) => 
                `font-medium py-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `font-medium py-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </NavLink>
          </nav>

          <div className="flex flex-col space-y-3">
            <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
              Masuk
            </button>
            <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header