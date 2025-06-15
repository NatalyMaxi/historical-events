import classNames from 'classnames';

import { HighlightedYear } from 'components';
import { useAnimatedRange } from 'hooks/useAnimatedRange';

import styles from './AnimatedPeriod.module.scss';

interface IAnimatedPeriodProps {
  startPeriod: number | null;
  endPeriod: number | null;
  duration: number;
}

export const AnimatedPeriod = ({ startPeriod, endPeriod, duration }: IAnimatedPeriodProps) => {
  const { animatedStart, animatedEnd } = useAnimatedRange(startPeriod, endPeriod, duration);

  return (
    <div className={classNames(styles.container)}>
      {animatedStart && <HighlightedYear year={animatedStart} size="large" color="violet" />}
      {animatedEnd && <HighlightedYear year={animatedEnd} size="large" color="pink" />}
    </div>
  );
};
