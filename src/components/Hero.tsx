import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight, Calendar, Brain, Calculator, User } from 'lucide-react' // Adicionei 'User' aqui
// Importando as imagens
import bgReforma from '@/assets/bg-reforma.jpg'
import bgIa from '@/assets/bg-inteligencia.png'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const visualsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      // Animação do conteúdo à esquerda
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.3'
      )
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      tl.fromTo(
        buttonsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      )

      // Animação da composição visual à direita
      tl.fromTo(
        visualsRef.current?.children || [],
        { x: 50, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        },
        '-=1'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex items-center bg-background"
    >
      {/* Background Gradient Styles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- COLUNA ESQUERDA --- */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-bold text-primary uppercase tracking-wide">
                Inscrições Abertas
              </span>
            </div>

            {/* Título */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white"
            >
              O Futuro do seu <br />
              negócio em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                2026
              </span>
            </h1>

            {/* Subtítulo */}
            <p
              ref={subtitleRef}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              O futuro dos negócios é de quem aprende rápido, se adapta e evolui
              com propósito. Crescer é um processo e começa com a decisão de não
              permanecer o mesmo.
              <span className="text-gold font-semibold">
                {' '}
                
              </span>{' '}
            
              <span className="text-gold font-semibold">
                {' '}
                
              </span>
             
              <br className="hidden md:block" />
             
            </p>

            {/* Botões */}
            <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all flex items-center gap-2 group"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('agenda')}
                className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 text-white transition-all"
              >
                Ver Agenda Completa
              </button>
            </div>
          </div>

          {/* --- COLUNA DIREITA: Visuals --- */}
          <div ref={visualsRef} className="relative hidden lg:block h-[600px]">
            {/* Fundo Decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />

            {/* Card Reforma */}
            <div className="absolute top-20 right-10 w-72 h-96 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500 overflow-hidden group z-10">
              <img
                src={bgReforma}
                alt="Reforma"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-md border border-blue-500/30">
                  <Calculator className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Reforma Tributária
                </h3>
                <p className="text-xs text-gray-300">Abril de 2026</p>
              </div>
            </div>

            {/* Card IA */}
            <div className="absolute top-32 left-10 w-80 h-[26rem] bg-gray-900 rounded-2xl border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group z-20">
              <img
                src={bgIa}
                alt="IA"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Imersão Prática
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md border border-primary/30">
                  <Brain className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  Inteligência Artificial
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Junho de 2026</span>
                </div>
              </div>
            </div>

            {/* Floating Networking Card */}
            <div className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl z-30 animate-bounce-slow">
              <p className="text-sm font-bold text-white">Networking Premium</p>
              <div className="flex -space-x-2 mt-2">
                {/* ÍCONES DE SILHUETA AQUI */}
                {[1, 2, 3].map(i => {
                  let bgColor = 'bg-gray-700'
                  let iconColor = 'text-gray-400'

                  // Alternando as cores dos avatares
                  if (i === 1) {
                    bgColor = 'bg-primary'
                    iconColor = 'text-black'
                  }
                  if (i === 2) {
                    bgColor = 'bg-secondary'
                    iconColor = 'text-white'
                  }

                  return (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-black ${bgColor} flex items-center justify-center`}
                    >
                      <User className={`w-4 h-4 ${iconColor}`} />
                    </div>
                  )
                })}

                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-black border-2 border-black">
                  +1k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import { useState } from 'react'