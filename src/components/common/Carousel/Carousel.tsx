import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classNames from 'classnames';
import { useId } from 'react';

import { EventCard, SwitchButton } from 'components';
import { Direction, Event } from 'types';

import 'swiper/css';
import styles from './Carousel.module.scss';

export interface ICarouselProps {
  events: Event[];
  resetKey?: number | string;
}

export const Carousel = ({ events, resetKey }: ICarouselProps) => {
  const id = useId();

  const nextButtonClass = `button-next-${id}`;
  const prevButtonClass = `button-prev-${id}`;

  return (
    <div className={styles.carousel}>
      <SwitchButton
        onClick={() => {}}
        direction={Direction.NEXT}
        className={classNames(styles.button, styles.buttonNext, nextButtonClass)}
        isSliderControl
      />
      <SwitchButton
        onClick={() => {}}
        direction={Direction.PREV}
        className={classNames(styles.button, styles.buttonPrev, prevButtonClass)}
        isSliderControl
      />
      <Swiper
        key={resetKey}
        className={styles.swiper}
        slidesPerView="auto"
        navigation={{
          nextEl: `.${nextButtonClass}`,
          prevEl: `.${prevButtonClass}`,
        }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            spaceBetween: 5,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 80,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={`${event.year}-${event.index}`} className={styles.swiperSlide}>
            <EventCard year={event.year} event={event.event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
