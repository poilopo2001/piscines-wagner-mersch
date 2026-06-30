import { HeroTypography } from './hero/hero-typography';
import { HeroSapinBand } from './hero/hero-sapin-band';
import { Marquee } from '@/motion/marquee';

export function HeroSapin() {
  return (
    <section
      aria-label="Présentation Piscines Wagner, pisciniste à Mersch"
      className="relative w-full bg-neutral-50"
    >
      <div className="container-wagner">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-[clamp(1rem,2.5vw,2rem)]">
          {/* Colonne gauche — ivoire, cols 1→7 (7/12) */}
          <div className="lg:col-span-7 pt-32 lg:pt-[128px] pb-20 lg:pb-20 lg:pr-8">
            <HeroTypography />
          </div>

          {/* Colonne droite — bande sapin, cols 8→13 (5/12), pleine hauteur */}
          <div className="lg:col-span-5 lg:-mr-[clamp(1.5rem,4vw,2.5rem)] lg:-mb-20 mt-8 lg:mt-[128px]">
            <HeroSapinBand />
          </div>
        </div>
      </div>

      {/* Marquee services — pleine largeur, pied du hero */}
      <Marquee />
    </section>
  );
}
