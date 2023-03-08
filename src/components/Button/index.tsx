import React, {useContext, useMemo} from 'react';
import {ButtonProps} from './types';

import {Container, Title, Loading} from './styled';
import {ThemeContext} from 'styled-components';

const Button = ({
  children,
  mode = 'contained',
  color = 'primary',
  loading,
  onPress,
  ...rest
}: ButtonProps) => {
  const {colors} = useContext(ThemeContext);

  const colorsByMode = useMemo(() => {
    return mode === 'outlined' ? colors[color].main : colors[color].onMain;
  }, [mode, color, colors]);

  return (
    <Container
      mode={mode}
      borderColor={colors[color].main}
      color={colors[color].main}
      onPress={onPress}
      {...rest}>
      <Title color={colorsByMode}>{children}</Title>
      {loading && <Loading size={15} color={colorsByMode} />}
    </Container>
  );
};

export default Button;
