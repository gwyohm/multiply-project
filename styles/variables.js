const colors = {
  lava: '#fe7877',
  tangerine: '#fd925e',
  pumpkin: '#fcb100',
  lemon: '#f7d021',
  choco: '#b79470',
  lime: '#9ff23a',
  veggie: '#2dcc70',
  eco: '#6ad922',
  mint: '#88e18e',
  aqua: '#2acec6',
  ice: '#04e6f7',
  turquoise: '#70ffd9',
  mizu: '#99e1ff',
  sky: '#55cdff',
  denim: '#5fa9ff',
  eggplant: '#c29eff',
  pink: '#fb88ff',
  peach: '#fc889f',
  lychee: '#fb6a87',
  raven: '#394151',
  slate: '#4c566c',
  charcoal: '#707889',
  metal: '#8293b9',
  ash: '#b4bed5',
  lithium: '#dbe0eb',
  mochi: '#f2f6fa',
};
const variables = {
  gutterWidth: 16,
  gridSize: 12,
  colors,
  numbersColors: {
    num0: {
      bg: colors.lychee,
      fg: colors.mochi,
    },

    num1: {
      bg: colors.pink,
      fg: colors.mochi,
    },

    num2: {
      bg: colors.eggplant,
      fg: colors.mochi,
    },

    num3: {
      bg: colors.lava,
      fg: colors.mochi,
    },

    num4: {
      bg: colors.pumpkin,
      fg: colors.mochi,
    },

    num5: {
      bg: colors.choco,
      fg: colors.mochi,
    },

    num6: {
      bg: colors.eco,
      fg: colors.mochi,
    },

    num7: {
      bg: colors.ice,
      fg: colors.mochi,
    },

    num8: {
      bg: colors.denim,
      fg: colors.mochi,
    },

    num9: {
      bg: colors.turquoise,
      fg: colors.mochi,
    },

    'num*': {
      bg: colors.raven,
      fg: colors.mochi,
    }
  }
};

export default variables;
