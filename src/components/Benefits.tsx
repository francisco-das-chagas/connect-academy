import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "500+", label: "Participantes" },
    { number: "50+", label: "Palestrantes" },
    { number: "10+", label: "Edições" },
    { number: "98%", label: "Satisfação" },
  ];

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 geometric-shape opacity-10 animate-float-slow" />

      <div className="max-w-7xl mx-auto relative">
        {/* Stats Grid */}
        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <span className="text-4xl md:text-5xl font-bold gold-gradient-text group-hover:scale-110 inline-block transition-transform">
                {stat.number}
              </span>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
