'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function PortfolioMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        isDesktop: '(min-width: 901px)',
      },
      (context) => {
        const { reduceMotion, isDesktop } = context.conditions as {
          reduceMotion: boolean;
          isDesktop: boolean;
        };

        if (reduceMotion) return;

        const intro = gsap.timeline({
          defaults: { duration: 0.75, ease: 'power3.out' },
        });

        intro
          .fromTo('.nav', { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: 0.55 })
          .fromTo('.availability', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 }, '-=0.2')
          .fromTo('.hero h1', { autoAlpha: 0, y: 56 }, { autoAlpha: 1, y: 0, duration: 1.05 }, '-=0.45')
          .fromTo('.heroFooter', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0 }, '-=0.52');

        gsap.to('.orbitOne', {
          rotation: '+=360',
          duration: 30,
          repeat: -1,
          ease: 'none',
        });

        gsap.to('.orbitTwo', {
          y: -16,
          scale: 1.14,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        const revealTargets = gsap.utils.toArray<HTMLElement>(
          '.manifesto .kicker, .manifestoText, .proofRow, .sectionHead, .featureCard, .projectCard, .timelineRow, .aboutLead, .aboutBody, .contactSection .kicker, .contactSection h2, .contactLinks',
        );

        revealTargets.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 42 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.82,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
            },
          );
        });

        if (isDesktop) {
          gsap.to('.phoneBack', {
            y: -34,
            rotation: -11,
            ease: 'none',
            scrollTrigger: {
              trigger: '.featureCard',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });

          gsap.to('.phoneFront', {
            y: 32,
            rotation: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: '.featureCard',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          });

          gsap.utils.toArray<HTMLElement>('.projectCard').forEach((card, index) => {
            const visual = card.querySelector<HTMLElement>('.visual');
            if (!visual) return;

            gsap.fromTo(
              visual,
              { y: index % 2 === 0 ? 18 : 10 },
              {
                y: index % 2 === 0 ? -16 : -24,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1,
                },
              },
            );
          });
        }
      },
    );

    return () => media.revert();
  }, { scope });

  return <div ref={scope}>{children}</div>;
}
