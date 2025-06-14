import classNames from 'classnames';

import styles from './MobileBullets.module.scss';

export interface IMobileBulletsProps {
  data: any;
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
      {data.map((item: any, i: any) => (
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
