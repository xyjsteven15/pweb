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

        const focusCard = scope.current?.querySelector<HTMLElement>('.projectBlue');
        if (focusCard) {
          const focusScore = focusCard.querySelector<HTMLElement>('.focusScoreValue');
          const scoreCounter = { value: 0 };
          const focusTimeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
              trigger: focusCard,
              start: 'top 76%',
              toggleActions: 'restart none restart reset',
            },
          });

          focusTimeline
            .set('.focusBars i', { scaleY: 0, transformOrigin: '50% 100%' })
            .set('.extensionCard', { autoAlpha: 0, scale: 0.45, y: 24, rotation: -8 })
            .set(scoreCounter, { value: 0 })
            .addLabel('chart')
            .to('.focusBars i', { scaleY: 1, duration: 0.65, stagger: 0.12 }, 'chart')
            .to(scoreCounter, {
              value: 84,
              duration: 1.15,
              ease: 'power2.out',
              onUpdate: () => {
                if (focusScore) focusScore.textContent = String(Math.round(scoreCounter.value));
              },
            }, 'chart')
            .addLabel('deepWork', 'chart+=1.05')
            .to('.extensionCard', {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              rotation: 5,
              duration: 0.68,
              ease: 'back.out(1.9)',
            }, 'deepWork');
        }

        const segmentsCard = scope.current?.querySelector<HTMLElement>('.projectAcid');
        if (segmentsCard) {
          const segmentsTimeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
              trigger: segmentsCard,
              start: 'top 76%',
              toggleActions: 'restart none restart reset',
            },
          });

          segmentsTimeline
            .set('.segmentSource', { autoAlpha: 1, scale: 1 })
            .set('.segmentsVisual .bubble', { autoAlpha: 0, scale: 0, transformOrigin: '50% 50%' })
            .set('.segmentStat', { autoAlpha: 0, y: 12 })
            .addLabel('whole')
            .fromTo('.segmentSource', { scale: 0.82 }, { scale: 1, duration: 0.55, ease: 'back.out(1.45)' }, 'whole')
            .addLabel('split', 'whole+=0.65')
            .to('.segmentSource', { autoAlpha: 0, scale: 0.28, duration: 0.42, ease: 'power3.in' }, 'split')
            .to('.segmentsVisual .bubble', {
              autoAlpha: 1,
              scale: 1,
              duration: 0.64,
              stagger: 0.13,
              ease: 'back.out(1.7)',
            }, 'split+=0.2')
            .to('.segmentStat', { autoAlpha: 1, y: 0, duration: 0.45 }, 'split+=0.68');
        }

        const coffeeCard = scope.current?.querySelector<HTMLElement>('.projectCoral');
        if (coffeeCard) {
          const coffeeTimeline = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
              trigger: coffeeCard,
              start: 'top 76%',
              toggleActions: 'restart none restart reset',
            },
          });

          coffeeTimeline
            .set('.coffeeThinking', { autoAlpha: 1, y: 0 })
            .set('.coffeeResponse', { autoAlpha: 0, y: 12 })
            .set('.responseWord', { autoAlpha: 0, y: 5 })
            .set('.messageActions', { autoAlpha: 0, y: 8 })
            .addLabel('thinking')
            .fromTo('.thinkingSpark', { rotation: -18, scale: 0.7 }, { rotation: 18, scale: 1, duration: 0.45, repeat: 2, yoyo: true }, 'thinking')
            .fromTo('.thinkingDots i', { y: 0, autoAlpha: 0.35 }, {
              y: -4,
              autoAlpha: 1,
              duration: 0.28,
              stagger: 0.12,
              repeat: 2,
              yoyo: true,
            }, 'thinking')
            .addLabel('answer', 'thinking+=1.25')
            .to('.coffeeThinking', { autoAlpha: 0, y: -7, duration: 0.25 }, 'answer')
            .to('.coffeeResponse', { autoAlpha: 1, y: 0, duration: 0.3 }, 'answer+=0.16')
            .to('.responseWord', { autoAlpha: 1, y: 0, duration: 0.16, stagger: 0.045 }, 'answer+=0.24')
            .to('.messageActions', { autoAlpha: 1, y: 0, duration: 0.38 }, '>-=0.05');
        }

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
