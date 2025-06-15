import { HighlightedYear } from 'components';

import styles from './EventCard.module.scss';

export interface IEventCardProps {
  year: number;
  event: string;
}

export const EventCard = ({ year, event }: IEventCardProps) => {
  return (
    <div className={styles.card}>
      <HighlightedYear year={year} size="small" />
      <p className={styles.text}>{event}</p>
    </div>
  );
};
