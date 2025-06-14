import classNames from 'classnames';

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow-icon.svg';
import { Direction } from 'types';

import styles from './SwitchButton.module.scss';

interface IButtonProps {
  isSliderControl?: boolean;
  onClick?: () => void;
  className?: string;
  direction: Direction;
  title?: string;
}

export const SwitchButton = ({
  isSliderControl = false,
  onClick,
  className,
  direction,
  title,
}: IButtonProps) => {
  const isNext = direction === Direction.NEXT;

  return (
    <button
      className={classNames(
        styles.button,
        isSliderControl && styles.sliderControl,
        isNext && styles.nextArrow,
        className,
      )}
      type="button"
      title={title ?? ''}
      onClick={onClick}
    >
      <ArrowIcon className={styles.icon} />
    </button>
  );
};
