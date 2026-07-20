import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.to('.progress-fill', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });

      gsap.fromTo(
        '.s1-brand',
        { opacity: 0.35, letterSpacing: '-0.08em' },
        {
          opacity: 1,
          letterSpacing: '-0.05em',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-1',
            start: 'top top',
            end: '40% top',
            scrub: true,
          },
        },
      );

      gsap.to('.s1-glass', {
        x: '110vw',
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.s1-caption', {
        opacity: 0,
        y: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });

      gsap.to('.s2-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.s2-glass', {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.s2-text', {
        yPercent: -55,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.fromTo(
        '.s-mag-glass',
        { scale: 0.42, x: '-48vw' },
        {
          scale: 1.55,
          x: '48vw',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-magnifier',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        '.s-mag-copy',
        { opacity: 0.35, scale: 0.96 },
        {
          opacity: 1,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-magnifier',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      );

      const s4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-4',
          start: 'top top',
          end: '+=70%',
          scrub: true,
          pin: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('.s4-pillar').forEach((pillar, i) => {
        s4Tl.fromTo(
          pillar,
          { y: i % 2 === 0 ? '85vh' : '-85vh' },
          {
            y: i % 2 === 0 ? '-85vh' : '85vh',
            ease: 'none',
          },
          0,
        );
      });

      gsap.utils.toArray<HTMLElement>('.s-cas-strip').forEach((strip, i) => {
        gsap.fromTo(
          strip,
          { x: i % 2 === 0 ? '-28vw' : '28vw' },
          {
            x: i % 2 === 0 ? '12vw' : '-12vw',
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

      gsap.fromTo(
        '.s-hor-bar',
        { y: '-46vh' },
        {
          y: '46vh',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-horizon',
            start: 'top top',
            end: '+=110%',
            scrub: true,
            pin: true,
          },
        },
      );

      gsap.fromTo(
        '.s-void-line',
        { opacity: 0.15, letterSpacing: '0.55em' },
        {
          opacity: 1,
          letterSpacing: '0.22em',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-void',
            start: 'top 70%',
            end: 'center center',
            scrub: true,
          },
        },
      );

      const convTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-convergence',
          start: 'top top',
          end: '+=110%',
          scrub: true,
          pin: true,
        },
      });

      convTl
        .fromTo(
          '.s-conv-shard-tl',
          { x: '-58vw', y: '-58vh', rotation: -42 },
          { x: 0, y: 0, rotation: 0, ease: 'none' },
          0,
        )
        .fromTo(
          '.s-conv-shard-tr',
          { x: '58vw', y: '-58vh', rotation: 42 },
          { x: 0, y: 0, rotation: 0, ease: 'none' },
          0,
        )
        .fromTo(
          '.s-conv-shard-bl',
          { x: '-58vw', y: '58vh', rotation: 42 },
          { x: 0, y: 0, rotation: 0, ease: 'none' },
          0,
        )
        .fromTo(
          '.s-conv-shard-br',
          { x: '58vw', y: '58vh', rotation: -42 },
          { x: 0, y: 0, rotation: 0, ease: 'none' },
          0,
        )
        .fromTo(
          '.s-conv-text',
          { opacity: 0.15, scale: 0.86 },
          { opacity: 1, scale: 1, ease: 'power1.out' },
          0.28,
        );

      gsap.utils.toArray<HTMLElement>('.s-mos-tile').forEach((tile, i) => {
        gsap.fromTo(
          tile,
          { rotationY: 0, rotationX: 0, z: 0, opacity: 1 },
          {
            rotationY: ((i % 3) - 1) * 38,
            rotationX: ((i % 2) - 0.5) * 34,
            z: 180,
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

      gsap.fromTo(
        '.s6-glass',
        { y: '82vh' },
        {
          y: '-8vh',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-aberration',
            start: 'top top',
            end: '+=110%',
            scrub: true,
            pin: true,
          },
        },
      );

      gsap.fromTo(
        '.s-clarity-veil',
        { clipPath: 'inset(0 48% 0 48%)' },
        {
          clipPath: 'inset(0 0% 0 0%)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-clarity',
            start: 'top top',
            end: '+=120%',
            scrub: true,
            pin: true,
          },
        },
      );

      gsap.fromTo(
        '.s-clarity-copy',
        { opacity: 0.2, filter: 'blur(8px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-clarity',
            start: 'top top',
            end: '+=120%',
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        '.s7-glass',
        { y: '100%' },
        {
          y: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-fin',
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          },
        },
      );

      gsap.fromTo(
        '.s7-mark',
        { opacity: 0.35, y: 28 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-fin',
            start: 'top top',
            end: '+=60%',
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="section-shell text-ink min-h-screen">
      <div className="ambient-field" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true">
        <span className="progress-fill origin-left scale-x-0" />
      </div>
      <Cursor />

      {/* 01 — Transparence */}
      <section className="section-1 relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/daylightglass/1920/1280"
            alt=""
            className="scene-image opacity-55"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 soft-veil" />
          <div className="light-beam" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="s1-caption eyebrow mb-8">A study in light and glass</p>
          <h1 className="s1-brand brand-mark text-[16vw] md:text-[12vw]">
            TRANSPARENCE
          </h1>
          <p className="s1-caption support mt-8 max-w-md text-sm md:text-base">
            Perception is shaped by what light can pass through — and what it
            cannot.
          </p>
        </div>
        <div className="s1-glass glass-fluted glass-hover-effect absolute top-0 left-[42%] z-20 h-full w-[22vw] min-w-[140px] max-w-[280px]" />
      </section>

      {/* 02 — Depth */}
      <section className="section-2 relative h-screen w-full overflow-hidden bg-mist/70">
        <span className="section-index">02 / Depth</span>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://picsum.photos/seed/facadeveil/1920/1080"
            alt=""
            className="s2-image scene-image opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cloud/30 via-transparent to-paper/70" />
        </div>
        <div className="s2-glass glass-frosted glass-hover-effect absolute top-[18%] left-[8%] z-10 h-[58vh] w-[84%]" />
        <div className="s2-text absolute top-[36%] left-[12%] z-20 w-[76%] max-w-3xl md:left-[16%]">
          <h2 className="display-line text-5xl md:text-8xl">
            Depth is an illusion
          </h2>
          <p className="support mt-7 max-w-md text-base md:text-lg">
            We read space not by what is solid, but by how light softens,
            bends, and withdraws around what stands in its way.
          </p>
        </div>
      </section>

      {/* 03 — Observe */}
      <section className="section-magnifier relative h-[220vh] w-full">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <span className="section-index">03 / Focus</span>
          <div className="s-mag-copy absolute inset-0 z-0 flex items-center justify-center px-6">
            <h2 className="display-line text-center text-[12vw] md:text-[8vw]">
              Observe
              <br />
              closely
            </h2>
          </div>
          <div className="s-mag-glass glass-frosted glass-hover-effect absolute z-10 flex h-[34vw] w-[34vw] min-h-[180px] min-w-[180px] max-h-[420px] max-w-[420px] items-center justify-center rounded-full shadow-[0_20px_60px_rgba(21,32,51,0.1)]">
            <span className="eyebrow">Focus</span>
          </div>
        </div>
      </section>

      {/* 04 — Fluting */}
      <section className="section-4 relative flex h-screen w-full items-center justify-center overflow-hidden bg-cloud/80">
        <span className="section-index">04 / Fluting</span>
        <div className="absolute inset-0 z-0 flex items-center justify-center px-8 md:px-28">
          <p className="display-line max-w-5xl text-center text-3xl md:text-6xl">
            Light rarely travels cleanly. Meeting resistance, it bends,
            fractures, and invents new realities from a single source.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-evenly">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="s4-pillar glass-fluted glass-hover-effect pointer-events-auto h-[150vh] w-[7vw] min-w-[42px]"
            />
          ))}
        </div>
      </section>

      {/* 05 — Layers */}
      <section className="section-cascade relative h-[210vh] w-full">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <span className="section-index">05 / Layers</span>
          <div className="absolute inset-0 z-0">
            <img
              src="https://picsum.photos/seed/layeredlight/1920/1080"
              alt=""
              className="scene-image opacity-45"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-paper/35" />
          </div>
          <h2 className="display-line relative z-0 text-center text-6xl md:text-8xl">
            Layers of truth
          </h2>
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between py-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="s-cas-strip glass-frosted pointer-events-auto -ml-[10vw] h-[14vh] w-[120vw]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Horizon */}
      <section className="section-horizon relative flex h-screen w-full items-center justify-center overflow-hidden bg-mist/60">
        <span className="section-index">06 / Horizon</span>
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-10 px-6">
          <h2 className="display-line text-center text-5xl md:text-8xl">
            What is seen
          </h2>
          <h2 className="display-line reflection-text text-center text-5xl md:text-8xl">
            What is hidden
          </h2>
        </div>
        <div className="s-hor-bar glass-frosted absolute left-0 z-10 h-[9vh] w-full shadow-[0_0_50px_rgba(157,184,201,0.25)]" />
      </section>

      {/* 07 — Void */}
      <section className="section-void relative flex h-screen w-full items-center justify-center bg-cloud/70 px-8">
        <span className="section-index">07 / Void</span>
        <p className="s-void-line eyebrow text-center text-[11px] md:text-xs">
          The absence of distortion is the ultimate luxury
        </p>
      </section>

      {/* 08 — Convergence */}
      <section className="section-convergence relative flex h-screen w-full items-center justify-center overflow-hidden bg-paper/80">
        <span className="section-index">08 / Convergence</span>
        <div className="s-conv-text absolute z-0 flex flex-col items-center text-center">
          <h2 className="display-line text-6xl md:text-[7.5vw]">All light</h2>
          <h2 className="display-line text-6xl md:text-[7.5vw]">converges</h2>
        </div>
        <div className="s-conv-shard-tl glass-fluted absolute top-[8%] left-[4%] z-10 h-[34vh] w-[38vw]" />
        <div className="s-conv-shard-tr glass-fluted absolute top-[8%] right-[4%] z-10 h-[34vh] w-[38vw]" />
        <div className="s-conv-shard-bl glass-fluted absolute bottom-[8%] left-[4%] z-10 h-[34vh] w-[38vw]" />
        <div className="s-conv-shard-br glass-fluted absolute bottom-[8%] right-[4%] z-10 h-[34vh] w-[38vw]" />
      </section>

      {/* 09 — Fragmented */}
      <section className="section-mosaic relative h-[210vh] w-full bg-mist/80">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <span className="section-index">09 / Fragmented</span>
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <h2 className="display-line text-center text-[11vw] md:text-[9vw]">
              Fragmented
            </h2>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10 grid grid-cols-3 gap-3 p-4 md:grid-cols-5 md:gap-4 md:p-10"
            style={{ perspective: '1200px' }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="s-mos-tile glass-frosted glass-hover-effect pointer-events-auto min-h-[14vh] w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Aberration */}
      <section className="section-aberration relative flex h-screen w-full items-center justify-center overflow-hidden bg-cloud">
        <span className="section-index">10 / Aberration</span>
        <div className="absolute top-[14%] z-0 flex w-full flex-col items-center px-6 text-center">
          <h2 className="display-line text-6xl md:text-[9vw]">Aberration</h2>
          <p className="support mt-6 max-w-lg text-base md:text-lg">
            When the lens fails to gather every wavelength to one shared point
            of focus.
          </p>
        </div>
        <div className="s6-glass glass-frosted absolute left-0 z-10 flex h-full w-full items-center justify-center shadow-[inset_1px_0_0_rgba(214,72,72,0.18),inset_-1px_0_0_rgba(54,96,214,0.18)]">
          <h3
            className="chromatic-text display-line z-20 text-5xl text-ink/75 md:text-7xl"
            data-text="PRISM"
          >
            PRISM
          </h3>
        </div>
      </section>

      {/* 11 — Clarity */}
      <section className="section-clarity relative flex h-screen w-full items-center justify-center overflow-hidden bg-paper">
        <span className="section-index">11 / Clarity</span>
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/clearhorizon/1920/1080"
            alt=""
            className="scene-image opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-transparent" />
        </div>
        <div className="s-clarity-copy relative z-10 max-w-3xl px-8 text-center">
          <p className="eyebrow mb-6">Transmission</p>
          <h2 className="display-line text-5xl md:text-7xl">
            Clarity arrives
            <br />
            without force
          </h2>
          <p className="support mx-auto mt-7 max-w-md text-base md:text-lg">
            After fracture and color, the plane settles. What remains is not
            emptiness — only light, unimpeded.
          </p>
        </div>
        <div className="s-clarity-veil glass-sheet absolute inset-[8%] z-20 md:inset-[12%]" />
      </section>

      {/* 12 — Fin */}
      <section className="section-fin relative flex h-screen w-full items-center justify-center overflow-hidden bg-mist/50">
        <span className="section-index">12 / Fin</span>
        <div className="s7-mark relative z-0 text-center">
          <h2 className="brand-mark text-8xl md:text-[9rem]">Fin.</h2>
          <p className="support mt-6 text-sm tracking-[0.18em] uppercase">
            Transparence
          </p>
        </div>
        <div className="s7-glass glass-frosted absolute top-0 left-0 z-10 h-full w-full" />
      </section>
    </div>
  );
}
