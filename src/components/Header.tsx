import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoImg from '@/assets/logo-academy.svg'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet' // Importando o menu lateral

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Estado para controlar o menu mobile
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
    // Fecha o menu mobile ao clicar
    setIsOpen(false)

    if (location.pathname !== '/' && id !== 'reforma') {
      return
    }

    if (location.pathname === '/' && id.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Links de navegação (reutilizáveis para desktop e mobile)
  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link
        to="/"
        className={`text-sm font-medium hover:text-primary transition-colors ${
          mobile ? 'text-lg py-2' : ''
        }`}
        onClick={() => setIsOpen(false)}
      >
        Início
      </Link>

      <Link
        to="/reforma-tributaria"
        className={`text-sm font-medium transition-colors rounded-full border ${
          location.pathname === '/reforma-tributaria'
            ? 'bg-primary/10 text-primary border-primary/20'
            : 'border-transparent hover:text-primary'
        } ${
          mobile
            ? 'text-lg py-2 px-0 border-0 bg-transparent text-foreground'
            : 'px-4 py-2'
        }`}
        onClick={() => setIsOpen(false)}
      >
        Próximos Encontros
      </Link>

      <a
        href="/#eventos"
        onClick={e => handleNavClick(e, '#eventos')}
        className={`text-sm font-medium hover:text-primary transition-colors ${
          mobile ? 'text-lg py-2' : ''
        }`}
      >
        Próximos Encontros
      </a>

      <a
        href="/#sobre"
        onClick={e => handleNavClick(e, '#sobre')}
        className={`text-sm font-medium hover:text-primary transition-colors ${
          mobile ? 'text-lg py-2' : ''
        }`}
      >
        Sobre
      </a>
    </>
  )

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
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 z-50"
        >
          <img src={LogoImg} alt="Connect Academy" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav (Escondido no Mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
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

        {/* Mobile Menu (Visível apenas no Mobile) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground hover:text-primary transition-colors">
                {/* Ícone de Menu Hambúrguer */}
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-primary/20"
            >
              <div className="flex flex-col gap-8 mt-10">
                <nav className="flex flex-col gap-6">
                  <NavLinks mobile />
                </nav>
                <div className="h-px w-full bg-border" />
                <button
                  onClick={() => {
                    setIsOpen(false)
                    document
                      .getElementById('inscricao')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-gold w-full py-3 text-base"
                >
                  Inscrever-se Agora
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
