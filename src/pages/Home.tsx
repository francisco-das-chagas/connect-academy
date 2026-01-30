import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import {
  Check,
  Star,
  Users,
  Zap,
  ArrowRight,
  Ticket,
  AlertCircle,
  Quote,
  Trophy,
  Handshake,
  MapPin
} from 'lucide-react'
import bgImageConnect from '@/assets/bg-connect-card.png'
import bgImageReforma from '@/assets/bg-reforma.jpg'
import bgIa from '@/assets/bg-inteligencia.png'
import bg360 from '@/assets/gestao-360.png'

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>('')

  const handleSelectEvent = (eventName: string) => {
    if (eventName === 'Gestão 360º') return

    setSelectedEvent(eventName)
    const formSection = document.getElementById('contact')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // EVENTOS ATUALIZADOS
  const events = [
    {
      title: 'Reforma Tributária (2ª Turma)',
      date: '11 de Abril de 2026',
      price: 'R$ 987,00',
      tag: 'Últimas Vagas',
      spots: '40 vagas',
      image: bgImageReforma,
      desc: 'Split Payment, IBS, CBS e o impacto real no seu caixa. Prepare sua empresa. 1 Dia + material + certificado',
      disabled: false
    },
    {
      title: 'Inteligência Artificial',
      date: '12 ou 13  de Junho de 2026',
      price: 'R$ 2.139,00',
      tag: 'Imersão Prática',
      spots: '50 vagas por turma',
      image: bgIa,
      desc: 'Crie agentes de IA, automatize vendas e domine o ChatGPT e Gemini. 1 Dia + material + certificado',
      disabled: false
    },
    {
      title: 'Connect Valley',
      date: '16 e 17 de Outubro de 2026',
      price: 'R$ 207,00',
      tag: 'Networking Puro',
      spots: null,
      image: bgImageConnect,
      desc: 'O maior evento de networking e negócios da região Norte do Ceará. (Edição de Outubro)',
      disabled: false
    },
    {
      title: 'Gestão 360º',
      date: 'Realizado',
      price: 'Encerrado',
      tag: 'Edição Anterior',
      spots: null,
      image: bg360,
      desc: 'Liderança e estratégias para gestores modernos. Um marco na gestão regional.',
      disabled: true
    }
  ]

  // COMBOS ATUALIZADOS
  const combos = [
    {
      name: 'Combo Reforma + Valley',
      price: 'R$ 1.194,00', // Soma: 987 + 207
      parcelas: '12x de R$ 99,50',
      features: [
        'Imersão Reforma Tributária',
        'Ingresso Connect Valley',
        'Material e Certificado',
        'Simulador de Impacto'
      ],
      highlight: false
    },
    {
      name: 'Combo Completo',
      tag: 'Mais Vendido',
      price: 'R$ 2.813,40', // Valor solicitado
      parcelas: '12x de R$ 234,45',
      economy: 'Economia de R$ 519,60', // (3333 - 2813.40)
      features: [
        'Imersão Reforma Tributária',
        'Imersão Inteligência Artificial',
        'Ingresso Connect Valley',
        'Economia Garantida',
        'Acesso à Comunidade'
      ],
      highlight: true
    },
    {
      name: 'Combo IA + Valley',
      price: 'R$ 2.346,00', // Soma: 2139 + 207
      parcelas: '12x de R$ 195,50',
      features: [
        'Imersão IA (3 dias)',
        'Ingresso Connect Valley',
        'Criação de Agente IA',
        'Plano de Implementação'
      ],
      highlight: false
    }
  ]

  // DIFERENCIAIS
  const differentials = [
    {
      icon: MapPin,
      title: 'Contexto Regional',
      desc: 'Conteúdo pensado para a realidade de Sobral e Região Norte do Ceará. Sem teoria de São Paulo que não funciona aqui.'
    },
    {
      icon: Star,
      title: 'Quem ensina, faz',
      desc: 'Instrutores que são empresários e profissionais atuantes. Não são professores de PowerPoint.'
    },
    {
      icon: Handshake,
      title: 'Pertencimento',
      desc: 'Você não vai aprender sozinho. Vai fazer parte de uma comunidade de empresários que crescem juntos.'
    },
    {
      icon: Zap,
      title: 'Método Prático',
      desc: 'Você sai com plano de ação, não com caderno de anotações. Exercícios práticos, checklists, ferramentas.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="agenda" className="py-24 px-6 relative bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Agenda <span className="gold-gradient-text">2026</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Eventos desenhados para a realidade do mercado atual.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((evt, idx) => (
                <div
                  key={idx}
                  className={`group relative h-[520px] rounded-3xl overflow-hidden shadow-xl transition-all ${
                    evt.disabled
                      ? 'grayscale hover:grayscale-0 cursor-default opacity-90'
                      : 'cursor-pointer hover:scale-[1.02]'
                  }`}
                  onClick={() => handleSelectEvent(evt.title)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                    <div
                      className={`absolute top-6 right-6 backdrop-blur-md border px-3 py-1 rounded-full flex items-center gap-2 ${evt.disabled ? 'bg-gray-500/20 border-gray-500/30' : 'bg-white/10 border-white/20'}`}
                    >
                      <Ticket
                        className={`w-4 h-4 ${evt.disabled ? 'text-gray-400' : 'text-primary'}`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${evt.disabled ? 'text-gray-300' : 'text-white'}`}
                      >
                        {evt.tag}
                      </span>
                    </div>

                    <p
                      className={`text-sm font-semibold mb-1 ${evt.disabled ? 'text-gray-400' : 'text-primary'}`}
                    >
                      {evt.date}
                    </p>

                    {evt.spots && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide">
                        <AlertCircle className="w-3 h-3" />
                        {evt.spots}
                      </span>
                    )}

                    <h3
                      className={`text-2xl font-bold mb-3 leading-tight ${evt.disabled ? 'text-gray-300' : 'text-white'}`}
                    >
                      {evt.title}
                    </h3>

                    <div className="mb-4 pt-4 border-t border-white/10 w-full">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Investimento
                      </p>
                      <p
                        className={`text-2xl font-bold ${evt.disabled ? 'text-gray-400 line-through decoration-red-500/50' : 'text-white'}`}
                      >
                        {evt.price}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                      {evt.desc}
                    </p>

                    <button
                      disabled={evt.disabled}
                      className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all w-full rounded-lg py-3 justify-center ${
                        evt.disabled
                          ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                          : 'text-primary group-hover:gap-4 hover:bg-white/5'
                      }`}
                    >
                      {evt.disabled ? (
                        'Esgotadas'
                      ) : (
                        <>
                          Inscrever-se Agora <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-background relative border-y border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Combos Especiais
              </h2>
              <p className="text-muted-foreground">
                Garanta o melhor custo-benefício levando os pacotes completos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {combos.map((combo, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${combo.highlight ? 'border-primary bg-primary/10 shadow-2xl shadow-primary/10 scale-105 z-10' : 'border-white/10 bg-secondary/20 hover:border-white/20'}`}
                >
                  {combo.highlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-yellow-400 to-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {combo.tag}
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {combo.name}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">
                          Valor:
                        </span>
                        <span className="text-3xl md:text-4xl font-bold text-primary">
                          {combo.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {combo.parcelas}
                      </p>
                    </div>
                    {combo.economy && (
                      <div className="mt-3 inline-block bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">
                        {combo.economy}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {combo.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Check
                          className={`w-5 h-5 shrink-0 ${combo.highlight ? 'text-primary' : 'text-gray-500'}`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSelectEvent(combo.name)}
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${combo.highlight ? 'btn-gold text-black shadow-lg shadow-primary/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                  >
                    Quero este Combo{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-secondary/10 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-background to-secondary/20 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
                Condições <span className="gold-gradient-text">Exclusivas</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Já é cliente R Feitosa?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Desconto exclusivo + Ingresso Valley por preço especial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      É patrocinador Connect?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Condições especiais nos eventos e no Connect Valley.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Ticket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Parcelamento Facilitado
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Parcele sua inscrição em até 12x no cartão de crédito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Por que o Connect Academy?
              </h2>
              <p className="text-muted-foreground">
                O único com metodologia validada para a nossa região.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentials.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-secondary/5 border border-white/5 hover:border-primary/20 transition-all hover:-translate-y-1"
                >
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/10 -z-10" />
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quem já participou
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  quote:
                    'O connect academy superou as expectativas e foi um momento de troca de experiências e conhecimento.',
                  author: 'Forquilha'
                },
                {
                  quote:
                    'O Connect Academy contribuiu muito para a visão estretégica da minha empresa, especialmente sobre gestão finaceira e tributária.',
                  author: 'Sobral'
                },
                {
                  quote:
                    'Muito bom para aperfeiçoamento de gestão, e pela oportunidade de conversar com gestores de vários nichos e compartilhar experiências. ',
                  author: 'Santana do Acarau'
                }
              ].map((depo, i) => (
                <div
                  key={i}
                  className="bg-background p-8 rounded-3xl border border-white/5 relative"
                >
                  <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                  <p className="text-lg italic text-gray-300 mb-6 relative z-10">
                    "{depo.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-600" />
                    <span className="font-bold text-sm text-primary">
                      {depo.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  +100
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">
                  Empresários Impactados
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  95+
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">
                  NPS de Satisfação
                </p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  90%
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">
                  Aplicaram em até 7 dias
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <ContactForm eventName={selectedEvent} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index
