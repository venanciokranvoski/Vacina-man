import { DefaultTheme } from "styled-components";
import * as Colors from '../colors';
import { typographyCommon } from "./common";
export const themeDark: DefaultTheme = {
    colors: {
      primary : {
         main : Colors.brand05,
         onMain: Colors.white,
      },
      secondary : {
        main : Colors.brand02,
        onMain: Colors.white,
     },
     error : {
        main : Colors.red,
        onMain: Colors.white,
     },
     background : {
        main : Colors.black,
        onMain: Colors.black,
     },
     surface: {
        main: Colors.white,
        onMain: Colors.neutrais
     },

    },
    typography: typographyCommon
};