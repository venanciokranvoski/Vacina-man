import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components";

export type themeTypes = 'light' | 'dark'

export interface Props{
    currentTheme: themeTypes;
    theme : DefaultTheme;
}


export interface colorSchemeProps {
    colorScheme: ColorSchemeName;
}