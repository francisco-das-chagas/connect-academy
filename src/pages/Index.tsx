import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'  

const Index = () => {
  // Estado para armazenar o evento selecionado
  const [selectedEvent, setSelectedEvent] = useState<string>('')

  // Função para selecionar o evento e rolar até o formulário
  const handleSelectEvent = (eventName: string) => {
    setSelectedEvent(eventName)
    const formSection = document.getElementById('inscricao')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Header />

      <main>
        <Hero />

        {/* SEÇÃO DE CARDS DE EVENTOS */}
        <section id="eventos" className="py-24 px-6 relative">
          {/* Fundo sutil */}
          <div className="absolute inset-0 bg-secondary/10 -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Escolha seu{' '}
                <span className="gold-gradient-text">Próximo Passo</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore nossos eventos e imersões desenhados para impulsionar
                sua carreira e seus negócios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((evt, idx) => (
                <div
                  key={idx}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
                  onClick={() => handleSelectEvent(evt.title)}
                >
                  {/* Imagem de Fundo */}
                  <div className="absolute inset-0">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Escuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                    {/* Badge Dourada */}
                    <span className="bg-primary text-black px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider backdrop-blur-md">
                      {evt.date}
                    </span>

                    <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                      {evt.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                      {evt.desc}
                    </p>

                    <button className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest group-hover:gap-4 transition-all">
                      Inscrever-se <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />

        {/* Formulário recebe o evento selecionado */}
        <ContactForm eventName={selectedEvent} />
      </main>

      <Footer />
    </div>
  )
}

export default Index
