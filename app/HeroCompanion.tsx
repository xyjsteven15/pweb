'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const faceClasses = [
  'faceSmile',
  'faceThinking',
  'faceLookLeft',
  'faceLookRight',
  'faceCold',
  'faceDizzy',
  'faceStartled',
  'faceSkeptical',
  'faceSleepy',
];

const ambientFaces = [2, 3, 4, 5, 6, 7, 8];

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
  const activeFace = useRef(0);
  const lastAmbientFace = useRef(-1);
  const lastReply = useRef(-1);
  const answering = useRef(false);
  const restoreTimer = useRef<number | null>(null);
  const responseTimer = useRef<number | null>(null);
  const animateTo = useRef<(index: number) => void>(() => undefined);
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [reply, setReply] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useGSAP((_, contextSafe) => {
    const faces = gsap.utils.toArray<HTMLElement>('.expressionFace');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(faces, { autoAlpha: 0, scale: 0.94 });
    gsap.set(faces[0], { autoAlpha: 1, scale: 1 });

    animateTo.current = contextSafe!((nextIndex: number) => {
      if (nextIndex === activeFace.current || !faces[nextIndex]) return;

      const current = faces[activeFace.current];
      const next = faces[nextIndex];

      gsap.killTweensOf([current, next]);

      if (reduceMotion) {
        gsap.set(current, { autoAlpha: 0, scale: 0.94 });
        gsap.set(next, { autoAlpha: 1, scale: 1, rotation: 0 });
      } else {
        gsap.timeline({ defaults: { overwrite: 'auto' } })
          .to(current, { autoAlpha: 0, scale: 1.035, duration: 0.16, ease: 'power2.in' })
          .fromTo(
            next,
            { autoAlpha: 0, scale: 0.9, rotation: nextIndex % 2 === 0 ? -2.5 : 2.5 },
            { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.26, ease: 'back.out(1.45)' },
            '-=0.03',
          );
      }

      activeFace.current = nextIndex;
    });

    return () => {
      animateTo.current = () => undefined;
    };
  }, { scope: root });

  useEffect(() => {
    const ambientInterval = window.setInterval(() => {
      if (answering.current) return;

      const choices = ambientFaces.filter((index) => index !== lastAmbientFace.current);
      const nextIndex = choices[Math.floor(Math.random() * choices.length)];
      lastAmbientFace.current = nextIndex;
      animateTo.current(nextIndex);

      if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
      restoreTimer.current = window.setTimeout(() => {
        if (!answering.current) animateTo.current(0);
      }, 2000);
    }, 10000);

    return () => {
      window.clearInterval(ambientInterval);
      if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
      if (responseTimer.current) window.clearTimeout(responseTimer.current);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuestion = question.trim();
    if (!nextQuestion || answering.current) return;

    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    if (responseTimer.current) window.clearTimeout(responseTimer.current);

    answering.current = true;
    setSubmittedQuestion(nextQuestion);
    setQuestion('');
    setReply('');
    setIsThinking(true);
    animateTo.current(1);

    responseTimer.current = window.setTimeout(() => {
      const choices = replies
        .map((text, index) => ({ text, index }))
        .filter((item) => item.index !== lastReply.current);
      const nextReply = choices[Math.floor(Math.random() * choices.length)];

      lastReply.current = nextReply.index;
      setReply(nextReply.text);
      setIsThinking(false);
      animateTo.current(0);
      answering.current = false;
    }, 2000);
  }

  return (
    <div className="heroCompanion" ref={root}>
      <div className="expressionStage" aria-hidden="true">
        {faceClasses.map((className) => (
          <span className={`expressionFace ${className}`} key={className} />
        ))}
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
