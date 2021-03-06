import React from 'react';
import store from '../redux/store/store';

import Icon from '../components/tray/Icon';

const tileTypes = () => {
  const { activeColor, canvasColor } = store.getState().main;
  const allTileTypes = {
    color: {
      colorType: 'activeColor',
      bgColor: activeColor,
      text: 'color',
      icon: null,
    },
    bg: {
      colorType: 'canvasColor',
      bgColor: canvasColor,
      text: 'BG',
      icon: null,
    },
    shape: {
      colorType: 'none',
      bgColor: 'green',
      text: 'shape',
      icon: <Icon name='square' library='MaterialCommunityIcons' />,
    },
    tool: {
      colorType: 'none',
      bgColor: 'green',
      text: 'tool',
      icon: <Icon name='shape' library='MaterialCommunityIcons' />,
    },
    clear: {
      colorType: 'none',
      bgColor: 'green',
      text: 'clear all',
      icon: <Icon name='trash-o' library='FontAwesome' defaultColor='black' />,
    },
    settings: {
      colorType: 'none',
      bgColor: 'green',
      text: 'settings',
      icon: <Icon name='settings-outline' library='MaterialCommunityIcons' defaultColor='black' />,
    },
  };
  return {
    allTileTypes: (() => allTileTypes)(),
    getBGColorType: tileType => allTileTypes[tileType].bgColor,
    getColorType: tileType => allTileTypes[tileType].colorType,
    getIcon: tileType => allTileTypes[tileType].icon,
    getText: tileType => allTileTypes[tileType].text,
    getTileProperty: (tileType, property) => allTileTypes[tileType][property],
    getTileTypes: () => allTileTypes,
  };
};

const unsubscribe = store.subscribe(tileTypes);

export default tileTypes;
