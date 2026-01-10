import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      tl.fromTo(
        cardsRef.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Análise Profunda",
      description: "Avaliação detalhada do seu negócio e identificação de oportunidades de crescimento.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Material Exclusivo",
      description: "Acesso a conteúdos premium e materiais desenvolvidos por especialistas.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Planos de Ação",
      description: "Estratégias práticas e personalizadas para implementação imediata.",
    },
  ];

  const benefits = [
    "Networking com profissionais de alto nível",
    "Acesso a cases reais de sucesso",
    "Mentoria durante o evento",
    "Coffee break e momentos de integração",
    "Certificado de participação",
    "Material de apoio completo",
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-32 top-1/2 w-64 h-64 geometric-shape opacity-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">Transforme seu Negócio</span>
          </div>

          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O que é o <span className="gold-gradient-text">Connect Academy</span>?
          </h2>

          <p ref={descRef} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um evento exclusivo que reúne profissionais de alto nível para compartilhar experiências 
            reais, estratégias comprovadas e criar conexões que impulsionam carreiras e negócios.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass-card p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gold-gradient rounded-full" />
            Por que participar?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
