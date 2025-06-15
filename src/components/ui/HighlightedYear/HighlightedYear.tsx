import classNames from 'classnames';

import styles from './HighlightedYear.module.scss';

export interface IHighlightedYearProps {
  year: number;
  className?: string;
  size?: 'large' | 'small';
  color?: 'blue' | 'pink' | 'violet';
}

export const HighlightedYear = ({
  year,
  size = 'small',
  color = 'blue',
  className,
}: IHighlightedYearProps) => {
  return (
    <span className={classNames(styles.year, styles[size], styles[color], className)}>{year}</span>
  );
};
