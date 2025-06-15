import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Point.module.scss';

export interface IPointProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  isActive: boolean;
  eventCategory: string;
}

export const Point = ({ isActive, children, eventCategory, className, ...props }: IPointProps) => {
  return (
    <div className={classNames(styles.point, isActive && styles.active, className)} {...props}>
      {children}
      <span className={classNames(styles.category, isActive && styles.active)}>
        {eventCategory}
      </span>
    </div>
  );
};
