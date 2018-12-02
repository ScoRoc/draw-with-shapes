import store from '../redux/store/store';

// export default tileTypes = () => {
const tileTypes = () => {
  const { activeColor, canvasColor } = store.getState().main;
  console.log('activeColor: ', activeColor);
  console.log('canvasColor: ', canvasColor);
  const tileTypesObj = {
    color: {
      colorType: 'activeColor',
      bgColor: activeColor,
      text: 'color',
      icon: null
    },
    bg: {
      colorType: 'canvasColor',
      bgColor: canvasColor,
      text: 'BG',
      icon: null
    },
    shape: {
      colorType: 'none',
      bgColor: 'green',
      text: 'shape',
      icon: 'square'
    },
    tool: {
      colorType: 'none',
      bgColor: 'green',
      text: 'tool',
      icon: 'square'
    },
    clear: {
      colorType: 'none',
      bgColor: 'green',
      text: 'clear all',
      icon: 'square'
    },
    settings: {
      colorType: 'none',
      bgColor: 'green',
      text: 'settings',
      icon: 'square'
    },
  };
  return tileTypesObj;
};

store.subscribe(tileTypes);

export default tileTypes();

export const getColorType = colorType => tileTypes()[colorType].colorType;
export const getBGColorType = bgColor => tileTypes()[bgColor].bgColor;
