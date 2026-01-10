import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete,
          });
        },
      });

      // Animate logo entrance
      tl.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Animate text
      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // Animate progress bar
      tl.to(
        {},
        {
          duration: 1.5,
          onUpdate: function () {
            setProgress(Math.round(this.progress() * 100));
          },
        },
        "-=0.3"
      );

      tl.to(progressRef.current, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="preloader"
    >
      {/* Background shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 geometric-shape opacity-30 animate-float" />
      <div className="absolute bottom-32 left-16 w-24 h-24 geometric-shape opacity-20 animate-float-slow" />

      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div
          ref={logoRef}
          className="w-24 h-24 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-2xl"
          style={{ boxShadow: "0 0 60px hsl(43 96% 56% / 0.4)" }}
        >
          <span className="text-4xl font-bold text-navy-deep">CA</span>
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Connect Academy</h1>
          <p className="text-muted-foreground text-sm">Carregando experiência...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gold-gradient origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Progress number */}
        <span className="text-primary font-semibold text-lg">{progress}%</span>
      </div>
    </div>
  );
};

export default Preloader;
