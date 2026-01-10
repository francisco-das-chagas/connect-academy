import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import gsap from 'gsap'

const ReformaTributaria = () => {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Estado para controlar qual evento está sendo inscrito (Padrão: Reforma Tributária)
  const [targetEvent, setTargetEvent] = useState<string>('Reforma Tributária')

  // Lista de Eventos
  const events = [
    {
      title: 'Gestão 360',
      date: 'Em breve',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      desc: 'Liderança e estratégias para gestores modernos.'
    },
    {
      title: 'Descomplicando a Reforma Tributária',
      date: 'Vagas Encerradas',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop',
      desc: 'Prepare sua empresa para o novo cenário fiscal.'
    },
    {
      title: 'Gestor 4.0', // <--- ALTERADO AQUI
      date: 'Em breve',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
      desc: 'Inovação e tecnologia na gestão de pessoas e processos.'
    }
  ]

  // Função ao clicar no card
  const handleSelectEvent = (eventName: string) => {
    setTargetEvent(eventName)
    const formSection = document.getElementById('inscricao')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const root = document.documentElement
    const originalPrimary = root.style.getPropertyValue('--primary')
    const originalForeground = root.style.getPropertyValue(
      '--primary-foreground'
    )

    // Força o tema azul
    root.style.setProperty('--primary', '221 83% 53%')
    root.style.setProperty('--primary-foreground', '210 40% 98%')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )
      tl.fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
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
          {/* Triângulos Azuis */}
          <div
            className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/10 to-transparent opacity-50 animate-float-slow pointer-events-none -z-10"
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-600/10 to-transparent opacity-40 animate-float pointer-events-none -z-10"
            style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}
          />

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div ref={titleRef} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-blue-600 tracking-wide">
                    Próximo Evento
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Descomplicando a <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">
                    Reforma Tributária
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Prepare sua empresa para o novo cenário fiscal. Uma análise
                  profunda sobre CBS, IBS e as estratégias cruciais para manter
                  a competitividade.
                </p>
              </div>

              <div>
                <button
                  disabled
                  className="bg-slate-200 text-slate-500 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed shadow-none border border-slate-300 w-full md:w-auto"
                >
                  Vagas Encerradas
                </button>
                <p className="text-sm text-destructive mt-4 font-medium">
                  Não há mais vagas disponíveis para esta imersão.
                </p>
              </div>
            </div>

            <div
              ref={imageRef}
              className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
            >
              <div className="absolute inset-4 bg-blue-600/20 blur-3xl rounded-full animate-pulse -z-10"></div>

              <div className="relative w-full h-full max-h-[500px] lg:max-h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 animate-float-slow group perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent z-10 pointer-events-none mix-blend-multiply transition-opacity group-hover:opacity-80" />

                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                  alt="Consultoria e Reforma Tributária"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-3xl z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* TÓPICOS */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-900/10 to-background -z-20" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: 'Transição de Regimes',
                desc: 'Planejamento prático para migrar do sistema atual para o IVA Dual sem choques operacionais.'
              },
              {
                title: 'Novas Alíquotas',
                desc: 'Entenda o impacto real da CBS e IBS no custo final e como recalcular seus preços.'
              },
              {
                title: 'Oportunidades & Riscos',
                desc: 'Mapeamento dos principais riscos fiscais e as novas teses jurídicas.'
              }
            ].map((item, i) => (
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
        </section>

        {/* OUTROS EVENTOS - CARDS ADAPTADOS PARA O TEMA AZUL */}
        <section className="py-20 px-6 bg-blue-50/10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Mais{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">
                  Imersões Exclusivas
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore nossa agenda e escolha o próximo passo para sua
                carreira.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((evt, idx) => (
                <div
                  key={idx}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20"
                  onClick={() => handleSelectEvent(evt.title)}
                >
                  {/* Imagem de Fundo */}
                  <div className="absolute inset-0">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Escuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                    <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider backdrop-blur-md">
                      {evt.date}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                      {evt.desc}
                    </p>

                    <button className="flex items-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-widest group-hover:gap-4 transition-all">
                      Inscrever-se <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO - Recebe o evento selecionado */}
        <div className="relative z-10">
          <ContactForm eventName={targetEvent} isBlue={true} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ReformaTributaria
