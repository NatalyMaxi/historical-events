import {
  AnimatedPeriod,
  Circle,
  ColoredLine,
  Container,
  MobileBullets,
  SwitchButton,
  Title,
} from 'components';

import { Direction } from 'types';
import { RADIUS } from 'utils/constants';

import styles from './HistoricalTimeline.module.scss';

export interface IHistoricalTimelineProps {
  data: any;
}

export const HistoricalTimeline = ({ data }: IHistoricalTimelineProps) => {
  const handleNext = () => {
    console.log('next');
  };

  const handlePrev = () => {
    console.log('prev');
  };

  const handleClick = (clickedIndex: number) => {
    console.log(clickedIndex);
  };

  console.log(data);

  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <ColoredLine className={styles.line} />
        <Title className={styles.title} titleTag="h1">
          Исторические <br />
          даты
        </Title>
      </div>
      <div className={styles.yearsContainer}>
        <AnimatedPeriod startPeriod={2015} endPeriod={2022} />
      </div>
      <div className={styles.controls}>
        <SwitchButton onClick={handlePrev} direction={Direction.PREV} title="предыдущий период" />
        <SwitchButton onClick={handleNext} direction={Direction.NEXT} title="следующий период" />
        <MobileBullets
          className={styles.mob}
          data={data}
          activeIndex={2}
          handleClick={handleClick}
        />
      </div>
      <div className={styles.circleWrapper}>
        <Circle radius={RADIUS} className={styles.svgCircle} />
      </div>
    </Container>
  );
};
