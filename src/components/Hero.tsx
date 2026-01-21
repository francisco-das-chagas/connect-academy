import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 }) // Delay reduzido para ficar mais ágil

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.3'
      )
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      tl.fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        '-=0.3'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToInscricao = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden flex items-center"
    >
      {/* Background Elements mantidos do original... */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/20 to-transparent opacity-30 animate-float-slow pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge de Urgência */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-red-500 uppercase tracking-wide">
                Você está preparado?
              </span>
            </div>

            {/* Título Principal - Painel 1 */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              O Futuro do seu <br />
              negócio em <span className="gold-gradient-text">2026</span>
            </h1>

            {/* Subtítulo - Painel 1 */}
            <p
              ref={subtitleRef}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              A maior mudança tributária dos últimos anos vai impactar seu
              caixa. A inteligência artificial vai mudar quem sobrevive no
              mercado.
              <br />
              <strong className="gold-gradient-text">
                Dois eventos. Uma decisão. O futuro do seu negócio.
              </strong>
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToInscricao}
                className="btn-gold flex items-center gap-2"
              >
                Garantir Minha Vaga
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('eventos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-outline-gold"
              >
                Ver Agenda 2026
              </button>
            </div>
          </div>

          {/* Área visual direita (pode manter os cards ou colocar uma imagem impactante) */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full opacity-30" />
            {/* Aqui você pode adicionar uma imagem ou manter os cards originais */}
            <div className="border border-white/10 bg-black/40 backdrop-blur-md p-8 rounded-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                O que está em jogo?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    Reforma Tributária: Seu caixa nunca mais será o mesmo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">🤖</span>
                  <span>IA: Quem não usar, vai ficar para trás.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
