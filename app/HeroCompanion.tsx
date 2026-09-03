'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const replies = [
  'I would start by asking what outcome would make this genuinely useful.',
  'The interesting part is usually hiding in the messy middle.',
  'That sounds like a problem worth prototyping before overthinking.',
  'My first instinct is to make the data tell a simpler story.',
  'I would test the smallest version, learn quickly, and keep moving.',
  'There is probably a cleaner system hiding inside that question.',
  'I like where this is going, especially the part that still feels unclear.',
  'Let us turn that idea into something someone can actually use.',
  'A sharp question usually beats a complicated model.',
  'I would look for the constraint that changes the whole decision.',
  'Good products often begin with one surprisingly specific observation.',
  'I am curious which assumption we could test first.',
];

export default function HeroCompanion() {
  const root = useRef<HTMLDivElement>(null);
  const ambientTimeline = useRef<gsap.core.Timeline | null>(null);
  const responseTimer = useRef<number | null>(null);
  const lastReply = useRef(-1);
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [reply, setReply] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const eyes = gsap.utils.toArray<HTMLElement>('.lineEye');
    const pupils = gsap.utils.toArray<HTMLElement>('.linePupil');

    gsap.set(eyes, { scaleY: 1, rotation: 0, transformOrigin: '50% 50%' });
    gsap.set(pupils, { x: 0, y: 0 });
    gsap.set('.lineMouth', { scaleX: 1, y: 0, rotation: 0, transformOrigin: '50% 100%' });

    if (reduceMotion) return;

    ambientTimeline.current = gsap.timeline({ repeat: -1, repeatDelay: 1.1 })
      .to(eyes, { scaleY: 0.08, duration: 0.08, ease: 'power2.in' }, 2.4)
      .to(eyes, { scaleY: 1, duration: 0.12, ease: 'power2.out' })
      .to(pupils, { x: 8, duration: 0.34, ease: 'power2.inOut' }, '+=1.15')
      .to(pupils, { x: -8, duration: 0.48, ease: 'power2.inOut' }, '+=0.8')
      .to(pupils, { x: 0, duration: 0.34, ease: 'power2.out' }, '+=0.72')
      .to('.lineMouth', { scaleX: 1.12, duration: 0.32, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '<');

    return () => {
      ambientTimeline.current?.kill();
      ambientTimeline.current = null;
    };
  }, { scope: root });

  useGSAP(() => {
    const eyes = gsap.utils.toArray<HTMLElement>('.lineEye');
    const pupils = gsap.utils.toArray<HTMLElement>('.linePupil');
    const mouth = root.current?.querySelector<HTMLElement>('.lineMouth');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!mouth) return;
    const duration = reduceMotion ? 0 : 0.28;
    const timeline = gsap.timeline({ defaults: { duration, ease: 'power2.out', overwrite: 'auto' } });

    if (isThinking) {
      ambientTimeline.current?.pause();
      timeline
        .to(pupils, { x: 0, y: -6 })
        .to(eyes[0], { rotation: 7 }, '<')
        .to(eyes[1], { rotation: -7 }, '<')
        .to(mouth, { scaleX: 0.58, y: 7, rotation: -3 }, '<');
    } else {
      timeline
        .to(eyes, { scaleY: 1, rotation: 0 })
        .to(pupils, { x: 0, y: 0 }, '<')
        .to(mouth, { scaleX: 1, y: 0, rotation: 0 }, '<')
        .call(() => ambientTimeline.current?.resume());
    }

    return () => timeline.kill();
  }, { scope: root, dependencies: [isThinking], revertOnUpdate: true });

  useEffect(() => () => {
    if (responseTimer.current) window.clearTimeout(responseTimer.current);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuestion = question.trim();
    if (!nextQuestion || isThinking) return;

    if (responseTimer.current) window.clearTimeout(responseTimer.current);
    setSubmittedQuestion(nextQuestion);
    setQuestion('');
    setReply('');
    setIsThinking(true);

    responseTimer.current = window.setTimeout(() => {
      const choices = replies
        .map((text, index) => ({ text, index }))
        .filter((item) => item.index !== lastReply.current);
      const nextReply = choices[Math.floor(Math.random() * choices.length)];

      lastReply.current = nextReply.index;
      setReply(nextReply.text);
      setIsThinking(false);
    }, 2000);
  }

  return (
    <div className="heroCompanion" ref={root}>
      <div className="expressionStage" aria-hidden="true">
        <div className="minimalFace">
          <div className="lineEyes">
            <span className="lineEye"><i className="linePupil" /></span>
            <span className="lineEye"><i className="linePupil" /></span>
          </div>
          <span className="lineMouth" />
        </div>
      </div>

      <form className="companionChat" onSubmit={handleSubmit}>
        <div className="chatTranscript" aria-live="polite">
          {!submittedQuestion && <p className="chatHint">Ask me a question.</p>}
          {submittedQuestion && <p className="chatQuestion">{submittedQuestion}</p>}
          {isThinking && (
            <p className="chatReply chatThinking">
              <span aria-hidden="true"><i /><i /><i /></span>
              Thinking...
            </p>
          )}
          {reply && <p className="chatReply">{reply}</p>}
        </div>
        <div className="chatComposer">
          <input
            aria-label="Ask Steven a question"
            autoComplete="off"
            disabled={isThinking}
            maxLength={160}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask me anything..."
            value={question}
          />
          <button aria-label="Send question" disabled={isThinking || !question.trim()} type="submit">↗</button>
        </div>
      </form>
    </div>
  );
}
