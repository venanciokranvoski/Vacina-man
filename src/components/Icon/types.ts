import {ImageProps} from 'react-native';
import {NameIconTypes} from '../../constants/styles/icons';

export interface IconOptionProps {
  icon: NameIconTypes;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
