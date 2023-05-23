import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';
import {typographyCommon, borders, spacing} from './common';
export const themeDark: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.white,
    },
    surface: {
      main: Colors.neutrais,
      onMain: Colors.white,
    },
    surface100: {
      main: Colors.greey100,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
  borders,
  spacing,
};
