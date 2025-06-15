import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Point.module.scss';

export interface IPointProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  isActive: boolean;
}

export const Point = ({ isActive, children, className, ...props }: IPointProps) => {
  return (
    <div
      className={classNames(
        styles.point,
        {
          [styles.active]: isActive,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
