import { SET_COLOR } from '../constants/action-types';

export const setColor = (color, colorType) => (
  {
    type: SET_COLOR,
    color,
    colorType
  }
);
