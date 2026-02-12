<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logoAcademy from "@/assets/logo-academy.svg";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
=======
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logoAcademy from '@/assets/logo-academy.svg'

interface PreloaderProps {
  onComplete: () => void
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  // 1. Removemos o useState que causava lentidão
  const progressNumberRef = useRef<HTMLSpanElement>(null)
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
<<<<<<< HEAD
            ease: "power3.inOut",
            onComplete,
          });
        },
      });
=======
            ease: 'power3.inOut',
            onComplete
          })
        }
      })
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

      // Animate logo entrance
      tl.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
<<<<<<< HEAD
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );
=======
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        }
      )
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

      // Animate text
      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
<<<<<<< HEAD
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
=======
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

      // Animate progress bar
      tl.to(
        {},
        {
          duration: 1.5,
<<<<<<< HEAD
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
=======
          // 2. Manipulação direta do DOM (Zero React Re-renders)
          onUpdate: function () {
            const progressVal = Math.round(this.progress() * 100)
            if (progressNumberRef.current) {
              progressNumberRef.current.innerText = `${progressVal}%`
            }
          }
        },
        '-=0.3'
      )

      tl.to(
        progressRef.current,
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut'
        },
        '<'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

  return (
    <div
      ref={containerRef}
      className="preloader"
<<<<<<< HEAD
=======
      // Dica extra: will-change ajuda o navegador mobile a se preparar para animação
      style={{ willChange: 'transform' }}
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
    >
      {/* Background shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 geometric-shape opacity-30 animate-float" />
      <div className="absolute bottom-32 left-16 w-24 h-24 geometric-shape opacity-20 animate-float-slow" />

      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div
          ref={logoRef}
          className="w-32 h-32 flex items-center justify-center"
        >
<<<<<<< HEAD
          <img src={logoAcademy} alt="Connect Academy" className="w-full h-full object-contain" />
=======
          <img
            src={logoAcademy}
            alt="Connect Academy"
            className="w-full h-full object-contain"
            // Otimização de imagem
            loading="eager"
            decoding="async"
          />
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center">
<<<<<<< HEAD
          <h1 className="text-2xl font-bold text-foreground mb-2">Connect Academy</h1>
          <p className="text-muted-foreground text-sm">Carregando experiência...</p>
=======
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Connect Academy
          </h1>
          <p className="text-muted-foreground text-sm">
            Carregando experiência...
          </p>
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gold-gradient origin-left"
<<<<<<< HEAD
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
=======
            style={{ transform: 'scaleX(0)', willChange: 'transform' }}
          />
        </div>

        {/* Progress number - Usando REF ao invés de state */}
        <span
          ref={progressNumberRef}
          className="text-primary font-semibold text-lg"
        >
          0%
        </span>
      </div>
    </div>
  )
}

export default Preloader
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
