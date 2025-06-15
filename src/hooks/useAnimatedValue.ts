import { useState, useEffect, useRef } from 'react';

import { animateValue } from 'helpers/animateFrame';

export function useAnimatedValue(targetValue: number, duration: number): number {
  const [value, setValue] = useState(targetValue);
  const cancelAnimationRef = useRef<() => void | null>(null);
  const previousValueRef = useRef<number>(value);

  useEffect(() => {
    if (cancelAnimationRef.current) cancelAnimationRef.current();

    const cancel = animateValue({
      from: previousValueRef.current,
      to: targetValue,
      duration,
      onUpdate: (val) => {
        setValue(val);
        previousValueRef.current = val;
      },
    });

    cancelAnimationRef.current = cancel;

    return () => {
      if (cancelAnimationRef.current) cancelAnimationRef.current();
    };
  }, [targetValue, duration]);

  return value;
}
