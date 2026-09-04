import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getBackgroundStyle = () => {
    if (scrollPosition < 200) {
      const progress = scrollPosition / 200
      const opacity = progress * 1
      return { backgroundColor: `rgba(24, 0, 38, ${opacity})` }
    } else {
      return { backgroundColor: 'rgba(24, 0, 38)' }
    }
  }

  const navLinks = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'proyectos', label: 'Proyectos' },
    { to: 'sobreMi', label: 'Sobre mi' },
    { to: 'contactame', label: 'Contactame' }
  ]

  return (
    <>
      <div
        className='flex z-50 w-full justify-center py-4 fixed transition-colors duration-300'
        style={getBackgroundStyle()}
      >
        {/* Desktop layout — igual que antes, recién desde xl para que no se pisen al achicar */}
        <div className='hidden xl:flex items-center w-[calc(100vw-20em)]'>
          <div className='flex-1'>
            <p
              className='flex text-4xl font-[CD-SemiBold] items-start text-transparent bg-clip-text
                  bg-gradient-to-r from-azul-style from-0% via-white via-40% to-white to-100%'
            >
              Jonatan Paez
            </p>
          </div>
          <nav className='flex flex-1'>
            <ul className='flex w-full justify-around text-white font-archivo font-bold text-base'>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    className='hover:text-azul-style progressive-underline cursor-pointer'
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex-1' />
        </div>

        {/* Mobile / tablet — el mismo menú que ya estaba bien en celular */}
        <div className='flex xl:hidden items-center justify-between w-full px-6'>
          <p
            className='text-2xl font-[CD-SemiBold] text-transparent bg-clip-text
                bg-gradient-to-r from-azul-style from-0% via-white via-40% to-white to-100%'
          >
            Jonatan Paez
          </p>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white focus:outline-none'
            aria-label='Toggle menu'
          >
            <span className='material-icons-round text-3xl'>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className='fixed top-[60px] left-0 w-full z-40 xl:hidden py-6'
          style={{ backgroundColor: 'rgba(24, 0, 38, 0.97)' }}
        >
          <ul className='flex flex-col items-center gap-6 text-white font-archivo font-bold text-lg'>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  className='hover:text-azul-style progressive-underline cursor-pointer'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export { Header }
