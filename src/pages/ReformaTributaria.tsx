import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import gsap from 'gsap'

const ReformaTributaria = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [targetEvent, setTargetEvent] = useState<string>('Reforma Tributária')

  const scrollToForm = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Tópicos atualizados baseados no Painel 2 do Folder
  const topics = [
    {
      title: 'Split Payment',
      desc: 'O dinheiro que você não vai mais receber: entenda a retenção automática e como isso afeta seu fluxo.'
    },
    {
      title: 'IBS e CBS',
      desc: 'Os novos impostos que substituem tudo. Entenda o que são, quanto custam e quando começam.'
    },
    {
      title: 'Simples Nacional',
      desc: 'A verdade que ninguém está contando: ainda vale a pena permanecer no Simples?'
    },
    {
      title: 'Precificação',
      desc: 'Seu preço atual está errado. Aprenda a recalcular para não quebrar após a reforma.'
    },
    {
      title: 'Imóveis & Aluguéis',
      desc: 'Mudanças drásticas para quem compra, vende ou vive de aluguel na nova era fiscal.'
    },
    {
      title: 'Bônus: IA na Gestão',
      desc: 'Ferramentas que vão automatizar sua conformidade fiscal e reduzir riscos.'
    }
  ]

  useEffect(() => {
    // Manter a animação original e tema azul
    const root = document.documentElement
    const originalPrimary = root.style.getPropertyValue('--primary')
    const originalForeground = root.style.getPropertyValue(
      '--primary-foreground'
    )
    root.style.setProperty('--primary', '221 83% 53%')
    root.style.setProperty('--primary-foreground', '210 40% 98%')

    const ctx = gsap.context(() => {
      // Animações GSAP mantidas
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      tl.fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        '-=0.6'
      )
    }, heroRef)

    return () => {
      root.style.setProperty('--primary', originalPrimary)
      root.style.setProperty('--primary-foreground', originalForeground)
      ctx.revert()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-blue-500/20 selection:text-blue-600">
      <Header />

      <main>
        {/* HERO */}
        <section
          ref={heroRef}
          className="pt-36 pb-20 px-6 relative overflow-hidden"
        >
          {/* Backgrounds mantidos */}
          <div
            className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/10 to-transparent opacity-50 animate-float-slow pointer-events-none -z-10"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div ref={titleRef} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-blue-600 tracking-wide">
                    04 de Abril de 2026
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Reforma Tributária: <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">
                    Seu caixa nunca mais será o mesmo
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  95% das empresas brasileiras ainda NÃO mediram o impacto no
                  caixa. Você faz parte dessa estatística?
                </p>
              </div>

              <div>
                <button
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 transition-all w-full md:w-auto transform hover:-translate-y-1"
                >
                  Garantir Minha Vaga
                </button>
                <p className="text-sm text-blue-600/80 mt-4 font-medium animate-pulse">
                  ⚠️ Poucas vagas disponíveis para esta imersão.
                </p>
              </div>
            </div>

            <div
              ref={imageRef}
              className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
            >
              {/* Imagem mantida */}
              <div className="relative w-full h-full max-h-[500px] lg:max-h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                  alt="Reforma Tributária"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TÓPICOS - Atualizados */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-900/10 to-background -z-20" />
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que você vai descobrir
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {topics.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl border border-blue-500/20 bg-background/40 backdrop-blur-md hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-blue-900/5 group"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-10">
          <ContactForm eventName={targetEvent} isBlue={true} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ReformaTributaria
