import React, {useContext} from 'react';
import {Container} from './styles';
import {IconProps} from './types';
import icons from '../../constants/styles/icons';
import {ThemeContext} from 'styled-components';

const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  const {colors} = useContext(ThemeContext);

  if (activeColor) {
    return (
      <Container
        size={size}
        source={icons[icon]}
        style={[{tintColor: activeColor}, style]}
        resizeMode="contain"
      />
    );
  }
  return (
    <Container
      size={size}
      source={icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};

export default Icon;
