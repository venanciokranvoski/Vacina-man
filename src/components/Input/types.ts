import {TextInputProps} from 'react-native';
import {NameIconTypes} from '../../constants/styles/icons';
import {ColorsType} from 'styled-components';

// eslint-disable-next-line prettier/prettier
 export  type IconPosition = 'left' | 'right';

export interface InputProps extends TextInputProps {
    color?: ColorsType;
    icon?: NameIconTypes;
    iconColor?: ColorsType;
    label?: string;
    error?: string;
    iconPosition: IconPosition;
}

export interface inputValueRef {
    value: string;
    focus?: () => void;
    blur?: () => void;
    setValue?: (value: string) => void;
}
