import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    // Animations
    const ctx = gsap.context(() => {
      // Section 1: The Lens
      gsap.to('.s1-glass', {
        x: '100vw',
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Section 2: The Depth
      gsap.to('.s2-glass', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.s2-text', {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Section Magnifier
      gsap.fromTo(
        '.s-mag-glass',
        { scale: 0.5, x: '-50vw', y: 0 },
        {
          scale: 1.5,
          x: '50vw',
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-magnifier',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      );

      // Section 4: The Fluting — pinned, pillars slide through
      const s4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-4',
          start: 'top top',
          end: '+=80%',
          scrub: true,
          pin: true,
        },
      });

      gsap.utils.toArray('.s4-pillar').forEach((pillar: any, i) => {
        s4Tl.fromTo(
          pillar,
          { y: i % 2 === 0 ? '80vh' : '-80vh' },
          {
            y: i % 2 === 0 ? '-80vh' : '80vh',
            ease: 'none',
          },
          0,
        );
      });

      // Section Cascade
      gsap.utils.toArray('.s-cas-strip').forEach((strip: any, i) => {
        gsap.fromTo(
          strip,
          { x: i % 2 === 0 ? '-30vw' : '30vw' },
          {
            x: i % 2 === 0 ? '10vw' : '-10vw',
            ease: 'none',
            scrollTrigger: {
              trigger: '.section-cascade',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        );
      });

      // Section Mosaic
      gsap.utils.toArray('.s-mos-tile').forEach((tile: any, i) => {
        gsap.fromTo(
          tile,
          { rotationY: 0, rotationX: 0, z: 0, opacity: 1 },
          {
            rotationY: ((i % 3) - 1) * 45,
            rotationX: ((i % 2) - 0.5) * 45,
            z: 200,
            opacity: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: '.section-mosaic',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        );
      });

      // Section 6: Dispersion — pinned, PRISM glass slides up to cover ABERRATION
      gsap.fromTo(
        '.s6-glass',
        { y: '80vh' },
        {
          y: '-10vh',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-6',
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          },
        },
      );

      // Section 7: The Reflection
      gsap.fromTo(
        '.s7-glass',
        { y: '100%' },
        {
          y: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-7',
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          },
        },
      );
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-silica text-obsidian min-h-screen selection:bg-obsidian selection:text-silica"
    >
      <Cursor />

      {/* Section 1: The Lens */}
      <section className="section-1 relative h-screen w-full flex items-center justify-center overflow-hidden">
        <h1 className="font-serif text-[12vw] tracking-tighter leading-none z-0">
          TRANSPARENCE
        </h1>
        <div className="s1-glass glass-fluted absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-full z-10 glass-hover-effect"></div>
      </section>

      {/* Section 2: The Depth */}
      <section className="section-2 relative h-screen w-full overflow-hidden bg-ivory">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
          <img
            src="https://picsum.photos/seed/architecture/1920/1080?grayscale"
            alt="Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="s2-glass glass-frosted absolute top-[20%] left-[10%] w-[80%] h-[60vh] z-10 glass-hover-effect"></div>
        <div className="s2-text absolute top-[40%] left-[20%] z-20 w-[60%]">
          <h2 className="font-serif text-7xl md:text-9xl tracking-tight leading-tight">
            DEPTH IS AN ILLUSION
          </h2>
          <p className="font-sans text-lg mt-8 max-w-md">
            We perceive space not by what is there, but by how light bends
            around what is in the way.
          </p>
        </div>
      </section>

      {/* Section Magnifier */}
      <section className="section-magnifier relative h-[200vh] w-full bg-ivory">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <h2 className="font-serif text-[8vw] tracking-tighter leading-none text-center">
              OBSERVE <br /> CLOSELY
            </h2>
          </div>
          <div className="s-mag-glass glass-frosted absolute w-[30vw] h-[30vw] rounded-full z-10 glass-hover-effect flex items-center justify-center">
            <span className="font-sans text-sm tracking-widest opacity-50">
              FOCUS
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: The Fluting */}
      <section className="section-4 relative h-screen w-full flex items-center justify-center overflow-hidden bg-silica">
        <div className="absolute inset-0 z-0 flex items-center justify-center px-12 md:px-32">
          <p className="font-serif text-4xl md:text-7xl leading-tight text-center max-w-6xl">
            Light does not travel in straight lines when it meets resistance. It
            bends, it fractures, it creates new realities from a single source.
          </p>
        </div>
        <div className="absolute inset-0 z-10 flex justify-evenly items-center pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="s4-pillar glass-fluted w-[8vw] h-[150vh] glass-hover-effect pointer-events-auto"
            ></div>
          ))}
        </div>
      </section>

      {/* Section Cascade */}
      <section className="section-cascade relative h-[200vh] w-full bg-silica">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
            <img
              src="https://picsum.photos/seed/cascade/1920/1080?grayscale"
              alt="Cascade"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="font-serif text-7xl md:text-9xl tracking-tight z-0 text-white mix-blend-difference">
            LAYERS OF TRUTH
          </h2>

          <div className="absolute inset-0 z-10 flex flex-col justify-between py-10 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`s-cas-strip glass-frosted w-[120vw] h-[15vh] -ml-[10vw] pointer-events-auto ${i % 2 === 0 ? 'origin-left' : 'origin-right'}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Void */}
      <section className="section-5 relative h-screen w-full flex items-center justify-center bg-silica">
        <p className="font-sans text-[12px] tracking-[0.2em] uppercase text-obsidian/60">
          The absence of distortion is the ultimate luxury.
        </p>
      </section>

      {/* Section Mosaic */}
      <section className="section-mosaic relative h-[200vh] w-full bg-obsidian text-silica">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <h2 className="font-serif text-[10vw] tracking-tighter leading-none text-center">
              FRAGMENTED
            </h2>
          </div>
          <div className="absolute inset-0 z-10 grid grid-cols-3 md:grid-cols-5 gap-4 p-4 md:p-12 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="s-mos-tile glass-frosted w-full h-full min-h-[15vh] glass-hover-effect pointer-events-auto"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: The Dispersion */}
      <section className="section-6 relative h-screen w-full flex items-center justify-center bg-ivory overflow-hidden">
        <div className="absolute top-[15%] z-0 flex flex-col items-center text-center w-full px-4">
          <h2 className="font-serif text-8xl md:text-[10vw] leading-none tracking-tighter">
            ABERRATION
          </h2>
          <p className="font-sans text-xl mt-6 max-w-lg text-obsidian/80">
            When the lens fails to focus all colors to the same convergence
            point.
          </p>
        </div>
        <div className="s6-glass absolute left-0 z-10 w-full h-full glass-frosted flex items-center justify-center shadow-[inset_1px_0_0_rgba(255,0,0,0.2),inset_-1px_0_0_rgba(0,0,255,0.2)]">
          <h3
            className="chromatic-text font-serif text-6xl md:text-8xl text-obsidian/70 z-20"
            data-text="PRISM"
          >
            PRISM
          </h3>
        </div>
      </section>

      {/* Section 7: The Reflection */}
      <section className="section-7 relative h-screen w-full flex items-center justify-center bg-silica overflow-hidden">
        <h2 className="font-serif text-9xl tracking-tighter z-0">Fin.</h2>
        <div className="s7-glass glass-frosted absolute top-0 left-0 w-full h-full z-10"></div>
      </section>
    </div>
  );
}
