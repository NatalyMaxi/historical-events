import classNames from 'classnames';

import styles from './ColoredLine.module.scss';

export interface IColoredLineProps {
  className?: string;
}

export const ColoredLine = ({ className }: IColoredLineProps) => {
  return <div className={classNames(styles.line, className)} />;
};
