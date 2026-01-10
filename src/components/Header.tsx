
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom' // Importar Link e useLocation
// ... imports existentes

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation() // Para saber em qual página estamos

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função auxiliar para rolar para âncoras se estiver na home, ou navegar se não estiver
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (location.pathname !== '/' && id !== 'reforma') {
      // Se não estiver na home e clicar em algo que não é a reforma, deixa o Link funcionar normal (vai pra home)
      return
    }

    // Se for âncora na mesma página
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
          {/* Se certifique de usar o caminho correto da logo */}
          <img
            src="./src/assets/logo-academy.svg"
            alt="Connect Academy"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Início
          </Link>

          {/* LINK PARA A NOVA ABA */}
          <Link
            to="/reforma-tributaria"
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-full border ${
              location.pathname === '/reforma-tributaria'
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'border-transparent hover:text-primary'
            }`}
          >
            Próximo encontro
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

        {/* Mobile Menu Button (Simplificado, mantenha o seu existente se houver) */}
        {/* ... */}
      </div>
    </header>
  )
}

export default Header
