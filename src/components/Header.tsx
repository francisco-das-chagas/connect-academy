import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import LogoImg from '@/assets/logo-academy.svg' // Importação da logo restaurada

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)

    // Se não estiver na home, navega para home primeiro (opcional, dependendo da rota)
    if (location.pathname !== '/' && !id.startsWith('http')) {
      // Lógica de navegação se necessário
    }

    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' // Fundo escuro ao rolar
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* LOGO RESTAURADA */}
          <Link to="/" onClick={() => scrollToSection('hero')}>
            <img
              src={LogoImg}
              alt="Connect Academy"
              className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Início
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Sobre
          </button>

          <div className="flex items-center gap-4 ml-4">
            {/* Botão Agenda */}
            <Button
              variant="outline"
              onClick={() => scrollToSection('agenda')}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Conheça a Agenda
            </Button>

            {/* Botão Garantir Vaga */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Garantir Vaga
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 shadow-2xl p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left py-2 font-medium text-lg text-gray-300 hover:text-white"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('agenda')}
            className="text-left py-2 font-medium text-lg text-gray-300 hover:text-white"
          >
            Conheça a Agenda
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-secondary text-white py-3 rounded-xl font-bold text-lg shadow-lg"
          >
            Garantir Vaga
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
