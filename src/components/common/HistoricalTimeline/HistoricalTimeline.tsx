import {
  AnimatedPeriod,
  Circle,
  ColoredLine,
  Container,
  MobileBullets,
  Point,
  SwitchButton,
  Title,
} from 'components';

import { Category, Direction } from 'types';
import {
  DEGREES_TO_RADIANS,
  FULL_CIRCLE_DEGREES,
  HOTSPOT_ANGLE,
  RADIUS,
  TOTAL_ANIMATION_DURATION,
} from 'utils/constants';

import styles from './HistoricalTimeline.module.scss';
import { useAnimatedValue } from 'hooks/useAnimatedValue';
import { useMemo, useState } from 'react';
import { padSingleDigit } from 'helpers/padSingleDigit';

export interface IHistoricalTimelineProps {
  eventData: Category[];
}

export const HistoricalTimeline = ({ eventData }: IHistoricalTimelineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numPoints = eventData.length;
  const angleStep = FULL_CIRCLE_DEGREES / numPoints;

  const targetAngleOffset = HOTSPOT_ANGLE - currentIndex * angleStep;
  const currentAngleOffset = useAnimatedValue(targetAngleOffset, TOTAL_ANIMATION_DURATION);

  const activeIndex = ((currentIndex % numPoints) + numPoints) % numPoints;

  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= numPoints - 1;

  const pointsWithPositions = useMemo(() => {
    return eventData.map((eventCategory, i) => {
      const angleDeg = i * angleStep + currentAngleOffset;
      const angleRad = angleDeg * DEGREES_TO_RADIANS;

      const x = RADIUS + RADIUS * Math.cos(angleRad);
      const y = RADIUS + RADIUS * Math.sin(angleRad);

      return { eventCategory, x, y, index: i };
    });
  }, [eventData, currentAngleOffset, angleStep]);

  const activeEvents = eventData[activeIndex]?.events ?? [];
  const targetYearMin =
    activeEvents.length > 0 ? Math.min(...activeEvents.map((e) => e.year)) : null;
  const targetYearMax =
    activeEvents.length > 0 ? Math.max(...activeEvents.map((e) => e.year)) : null;

  const handleClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex);
  };

  const handleNext = () => {
    if (currentIndex < numPoints - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

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
        <AnimatedPeriod
          startPeriod={targetYearMin}
          endPeriod={targetYearMax}
          duration={TOTAL_ANIMATION_DURATION}
        />
      </div>
      <div className={styles.controls}>
        <span className={styles.elem}>
          {`${padSingleDigit(activeIndex + 1)}/${padSingleDigit(numPoints)}`}
        </span>
        <div className={styles.buttonContainer}>
          <SwitchButton
            onClick={handlePrev}
            direction={Direction.PREV}
            title="предыдущий период"
            isDisabled={isPrevDisabled}
          />
          <SwitchButton
            onClick={handleNext}
            direction={Direction.NEXT}
            title="следующий период"
            isDisabled={isNextDisabled}
          />
        </div>
        <MobileBullets data={eventData} activeIndex={activeIndex} handleClick={handleClick} />
      </div>
      <div className={styles.circleWrapper}>
        <Circle radius={RADIUS} className={styles.svgCircle} />
        {pointsWithPositions.map(({ eventCategory, x, y, index }) => {
          const isActive = index === activeIndex;

          return (
            <Point
              key={eventCategory.id}
              isActive={isActive}
              className={styles.point}
              style={{ left: x, top: y }}
              onClick={() => handleClick(index)}
              title={eventCategory.name}
            >
              {index + 1}
            </Point>
          );
        })}
      </div>
    </Container>
  );
};
