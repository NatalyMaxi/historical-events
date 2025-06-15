import classNames from 'classnames';

import { Category } from 'types';

import styles from './MobileBullets.module.scss';

export interface IMobileBulletsProps {
  data: Category[];
  activeIndex: number;
  handleClick: (i: number) => void;
  className?: string;
}

export const MobileBullets = ({
  data,
  activeIndex,
  handleClick,
  className,
}: IMobileBulletsProps) => {
  return (
    <ul className={styles.bullets}>
      {data.map((item, i) => (
        <li
          key={i}
          className={classNames(styles.bullet, { [styles.active]: i === activeIndex, className })}
          onClick={() => handleClick(i)}
          title={item.name}
        />
      ))}
    </ul>
  );
};
