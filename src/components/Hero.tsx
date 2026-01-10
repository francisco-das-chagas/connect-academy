import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        cardsRef.current?.children || [],
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToInscricao = () => {
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-32 right-0 w-[600px] h-[600px] opacity-30">
        <div className="w-full h-full geometric-shape animate-float-slow" />
      </div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 geometric-shape opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 geometric-shape opacity-15 animate-float-slow" />

      {/* Dots pattern */}
      <div className="absolute bottom-32 right-20 grid grid-cols-4 gap-3 opacity-40">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Próximo Evento em Breve</span>
            </div>

            {/* Title */}
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Connect{" "}
              <span className="gold-gradient-text">Academy</span>
              <br />
              <span className="text-muted-foreground">Conectando</span>
              <br />
              <span className="gold-gradient-text">Conhecimento</span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Eventos exclusivos que conectam profissionais, compartilham experiências reais e 
              estratégias comprovadas para impulsionar sua carreira e seus negócios.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <button onClick={scrollToInscricao} className="btn-gold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Garantir Minha Vaga
              </button>
              <button
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-gold"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Networking Premium</h3>
              <p className="text-sm text-muted-foreground">Conecte-se com profissionais de alto nível</p>
            </div>

            <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Conteúdo Exclusivo</h3>
              <p className="text-sm text-muted-foreground">Estratégias práticas e comprovadas</p>
            </div>

            <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Palestras Inspiradoras</h3>
              <p className="text-sm text-muted-foreground">Especialistas reconhecidos no mercado</p>
            </div>

            <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Investimento Acessível</h3>
              <p className="text-sm text-muted-foreground">Preços especiais para inscritos antecipados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
