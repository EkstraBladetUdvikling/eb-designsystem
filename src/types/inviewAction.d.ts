export interface IInviewOptions {
  minIntersectingTime?: number;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
  unobserveOnEnter?: boolean;
}

export interface IInviewPosition {
  x?: number;
  y?: number;
}

export interface IInviewScrollDirection {
  vertical?: TInviewDirection;
  horizontal?: TInviewDirection;
}

export type TInviewDirection = 'up' | 'down' | 'left' | 'right';
