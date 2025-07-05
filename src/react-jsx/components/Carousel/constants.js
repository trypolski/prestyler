// eslint-disable-next-line import/prefer-default-export
export const DIRECTIONS = {
  FORWARD: 'FORWARD',
  BACK: 'BACK',
};

export const TRANSITION_TYPES = {
  MOVE: 'MOVE',
  FADE: 'FADE',
};

export const TRANSITION_CLASSNAMES = {
  ACTIVE: 'active',
  [TRANSITION_TYPES.MOVE]: {
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    START: 'carousel-item-start',
    END: 'carousel-item-end',
  },
};
