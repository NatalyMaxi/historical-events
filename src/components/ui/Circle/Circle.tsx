import classNames from 'classnames';

import styles from './Circle.module.scss';

interface ICircleProps {
  radius: number;
  className?: string;
}

export const Circle = ({ radius, className }: ICircleProps) => {
  const diameter = radius * 2;

  return (
    <svg
      className={classNames(styles.circle, className)}
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
    >
      <circle cx={radius} cy={radius} r={radius} fill="none" />
    </svg>
  );
};
