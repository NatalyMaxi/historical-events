export enum Direction {
  PREV = 'prev',
  NEXT = 'next',
}

export interface Event {
  year: number;
  event: string;
  index: number;
}

export interface Category {
  id: number;
  name: string;
  events: Event[];
}
