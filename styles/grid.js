import variables from './variables';

export const container = {
  paddingLeft: variables.gutterWidth,
  paddingRight: variables.gutterWidth,
  paddingTop: variables.gutterWidth,
  paddingBottom: variables.gutterWidth,
  flex: 1,
};

export const row = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: -variables.gutterWidth/2,
  marginRight: -variables.gutterWidth/2,
};

export const col = {
  padding: variables.gutterWidth/2,
  width: 'auto',
};
export const col12 = {
  width: '100%',
};
export const col11 = {
  width: '91.66%',
};
export const col10 = {
  width: '83.33%',
};
export const col9 = {
  width: '75%',
};
export const col8 = {
  width: '66.67%',
};
export const col7 = {
  width: '58.33%',
};
export const col6 = {
  width: '50%',
};
export const col5 = {
  width: '42.67%',
};
export const col4 = {
  width: '33.33%',
};
export const col3 = {
  width: '25%',
};
export const col2 = {
  width: '16.67%',
};
export const col1 = {
  width: '8.33%',
};
