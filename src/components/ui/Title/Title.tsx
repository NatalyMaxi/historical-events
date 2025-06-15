import { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Title.module.scss';

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  titleTag: 'h1' | 'h2' | 'h3';
  className?: string;
  children: ReactNode;
}

const headingStyles: Record<ITitleProps['titleTag'], string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
};

export const Title = ({ titleTag, className, children }: ITitleProps) => {
  const Tag = titleTag;
  const headingStyle = headingStyles[titleTag] || '';

  return <Tag className={classnames(styles.title, headingStyle, className)}>{children}</Tag>;
};
