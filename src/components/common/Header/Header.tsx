import { ReactNode } from 'react';

import styles from './Header.module.scss';

export interface IHeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <div className={styles.container}>{children}</div>
      </div>
    </header>
  );
};
