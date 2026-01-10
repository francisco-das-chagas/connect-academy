import { useRef, useEffect } from "react";
import gsap from "gsap";
import logoAcademy from "@/assets/logo-academy.svg";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 2.5, ease: "power2.out" }
      );

      gsap.fromTo(
        navRef.current?.children || [],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 2.7, ease: "power2.out" }
      );

      gsap.fromTo(
        ctaRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 3, ease: "power2.out" }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-3">
          <img src={logoAcademy} alt="Connect Academy" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav ref={navRef} className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Sobre o Evento
          </button>
          <button
            onClick={() => scrollToSection("inscricao")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Inscrição
          </button>
        </nav>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onClick={() => scrollToSection("inscricao")}
          className="btn-gold text-sm px-6 py-3 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Inscreva-se
        </button>
      </div>
    </header>
  );
};

export default Header;
