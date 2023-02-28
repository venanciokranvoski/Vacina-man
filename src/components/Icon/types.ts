import { ImageProps } from "react-native";
import {ColorsType} from  'styled-components'
import { NameIconTypes } from "../../constants/styles/icons";

export interface IconOptionProps {
    icon:  NameIconTypes;
    size?: number;
    activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps{}