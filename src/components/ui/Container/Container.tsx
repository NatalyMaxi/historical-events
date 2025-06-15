import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

export interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  return (
    <section className={classNames(styles.section, className)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
