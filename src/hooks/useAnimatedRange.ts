import { useState, useEffect, useRef } from 'react';
import { animateStep } from 'helpers/animateStep';

export function useAnimatedRange(
  targetStart: number | null,
  targetEnd: number | null,
  duration: number,
): { animatedStart: number | null; animatedEnd: number | null } {
  const [animatedStart, setAnimatedStart] = useState<number | null>(targetStart);
  const [animatedEnd, setAnimatedEnd] = useState<number | null>(targetEnd);

  const previousStartRef = useRef<number | null>(targetStart);
  const previousEndRef = useRef<number | null>(targetEnd);
  const cancelAnimationsRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    cancelAnimationsRef.current.forEach((cancel) => cancel());
    cancelAnimationsRef.current = [];

    if (targetStart === null || targetEnd === null) {
      setAnimatedStart(null);
      setAnimatedEnd(null);
      previousStartRef.current = null;
      previousEndRef.current = null;
      return;
    }

    if (previousStartRef.current === null || previousEndRef.current === null) {
      setAnimatedStart(targetStart);
      setAnimatedEnd(targetEnd);
      previousStartRef.current = targetStart;
      previousEndRef.current = targetEnd;
      return;
    }

    const startDiff = Math.abs(targetStart - previousStartRef.current);
    const endDiff = Math.abs(targetEnd - previousEndRef.current);

    const startSteps = startDiff || 1;
    const endSteps = endDiff || 1;

    const startStepDelay = duration / startSteps;
    const endStepDelay = duration / endSteps;

    let startDone = false;
    let endDone = false;

    const cancelStart = animateStep({
      from: previousStartRef.current,
      to: targetStart,
      stepDelay: startStepDelay,
      onStep: setAnimatedStart,
      onDone: () => {
        startDone = true;
        if (startDone && endDone) {
          previousStartRef.current = targetStart;
          previousEndRef.current = targetEnd;
        }
      },
    });

    const cancelEnd = animateStep({
      from: previousEndRef.current,
      to: targetEnd,
      stepDelay: endStepDelay,
      onStep: setAnimatedEnd,
      onDone: () => {
        endDone = true;
        if (startDone && endDone) {
          previousStartRef.current = targetStart;
          previousEndRef.current = targetEnd;
        }
      },
    });

    cancelAnimationsRef.current = [cancelStart, cancelEnd];

    return () => {
      cancelAnimationsRef.current.forEach((cancel) => cancel());
    };
  }, [targetStart, targetEnd, duration]);

  return { animatedStart, animatedEnd };
}
