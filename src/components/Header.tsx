import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// 1. IMPORTAR A LOGO AQUI (Ajuste o caminho se necessário)
import LogoImg from '@/assets/logo-academy.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (location.pathname !== '/' && id !== 'reforma') {
      return
    }

    if (location.pathname === '/' && id.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          {/* 2. USAR A VARIÁVEL IMPORTADA AQUI NO SRC */}
          <img src={LogoImg} alt="Connect Academy" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Início
          </Link>

          <Link
            to="/reforma-tributaria"
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-full border ${
              location.pathname === '/reforma-tributaria'
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'border-transparent hover:text-primary'
            }`}
          >
            Reforma Tributária
          </Link>

          <a
            href="/#sobre"
            onClick={e => handleNavClick(e, '#sobre')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre
          </a>

          <button
            onClick={() =>
              document
                .getElementById('inscricao')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-gold px-6 py-2 text-sm"
          >
            Inscrever-se
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
