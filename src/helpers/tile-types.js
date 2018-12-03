import store from '../redux/store/store';

const tileTypes = () => {
  const { activeColor, canvasColor } = store.getState().main;
  const allTileTypes = {
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
  return {
    getBGColorType: tileType => allTileTypes[tileType].bgColor,
    getColorType: tileType => allTileTypes[tileType].colorType,
    getIcon: tileType => allTileTypes[tileType].icon,
    getText: tileType => allTileTypes[tileType].text,
    getTileProperty: (tileType, property) => allTileTypes[tileType][property],
    getTileTypes: () => allTileTypes,
    allTileTypes: (() => allTileTypes)()
  };
};

const unsubscribe = store.subscribe(tileTypes);

export default tileTypes;
