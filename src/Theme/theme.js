import colorPalette from './colors';
import sizeUnit from './sizeUnit';

const jammaTheme = {
  colors: {
    ...colorPalette,
  },
  typography: {
    fontFamily: 'Poppin',
    secondaryFont: 'Roboto',

    h1fontSize: sizeUnit[9],
    h2fontSize: sizeUnit[8],
    h3fontSize: sizeUnit[7],
    h4fontSize: sizeUnit[6],
    h5fontSize: sizeUnit[5],
    h6fontSize: sizeUnit[4],
  },
};

export default jammaTheme;