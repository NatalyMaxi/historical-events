import classNames from 'classnames';

import { HighlightedYear } from 'components';

import styles from './AnimatedPeriod.module.scss';

interface IAnimatedPeriodProps {
  startPeriod: number | null;
  endPeriod: number | null;
}

export const AnimatedPeriod = ({ startPeriod, endPeriod }: IAnimatedPeriodProps) => {
  return (
    <div className={classNames(styles.container)}>
      {startPeriod && <HighlightedYear year={startPeriod} size="large" color="blue" />}
      {endPeriod && <HighlightedYear year={endPeriod} size="large" color="pink" />}
    </div>
  );
};
