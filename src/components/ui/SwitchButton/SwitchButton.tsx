import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowIcon } from 'assets/svg/arrow-icon.svg';
import { Direction } from 'types';

import styles from './SwitchButton.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSliderControl?: boolean;
  onClick?: () => void;
  className?: string;
  direction: Direction;
  title?: string;
  isDisabled: boolean;
}

export const SwitchButton = ({
  isSliderControl = false,
  onClick,
  className,
  direction,
  title,
  isDisabled,
  ...props
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
      {...props}
      disabled={isDisabled}
    >
      <ArrowIcon className={styles.icon} />
    </button>
  );
};
