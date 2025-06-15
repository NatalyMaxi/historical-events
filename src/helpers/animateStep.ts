export type AnimateStepOptions = {
  from: number;
  to: number;
  stepDelay: number;
  onStep: (val: number) => void;
  onDone?: () => void;
};

export function animateStep({
  from,
  to,
  stepDelay,
  onStep,
  onDone,
}: AnimateStepOptions): () => void {
  let timeoutId: number | null = null;

  const stepFn = (current: number) => {
    if (current === to) {
      onDone?.();
      return;
    }

    const step = current < to ? 1 : -1;
    const nextValue = current + step;

    onStep(nextValue);

    timeoutId = window.setTimeout(() => {
      stepFn(nextValue);
    }, stepDelay);
  };

  onStep(from);

  timeoutId = window.setTimeout(() => stepFn(from), stepDelay);

  return () => {
    if (timeoutId !== null) clearTimeout(timeoutId);
  };
}
