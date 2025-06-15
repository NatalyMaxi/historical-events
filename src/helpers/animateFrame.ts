export type AnimationCallback = (value: number) => void;

export function animateValue({
  from,
  to,
  duration,
  onUpdate,
  onComplete,
}: {
  from: number;
  to: number;
  duration: number;
  onUpdate: AnimationCallback;
  onComplete?: () => void;
}) {
  let animationFrameId: number;
  let startTime: number | null = null;

  const animate = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = from + (to - from) * progress;

    onUpdate(currentValue);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      if (onComplete) onComplete();
    }
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}
