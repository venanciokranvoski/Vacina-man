import React, {
  useCallback,
  useContext,
  useState,
  useMemo,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react';
import {
  InputInternal,
  Border,
  Container,
  Error,
  Label,
  IconContainer,
} from './styled';
import {ThemeContext} from 'styled-components';
import {InputProps, inputValueRef} from './types';
import {TouchableOpacity} from 'react-native';
import Icon from '../Icon';

const Input: React.ForwardRefRenderFunction<inputValueRef, inputProps> = (
  {
    color = 'surface',
    secureTextEntry,
    icon,
    iconColor,
    label,
    error,
    iconPosition = 'right',
    onChangeText,
    ...rest
  },
  ref,
) => {
  const {colors} = useContext(ThemeContext);
  /**
   * States
   */

  const [text, setText] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  /**
   * Refs
   */
  const internalRef = useRef<any>();

  /**
   * useImperativeHandle
   */
  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  /**
   * Memos
   */

  const selectColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return colors.error.main;
    }
    if (iconColor) {
      return colors[iconColor].main;
    }

    return colors[color].main;
  }, [error, iconColor, color, colors]);

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity onPress={() => setPasswordVisible(old => !old)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon
              icon={passwordVisible ? 'eyeOpen' : 'eyeClose'}
              activeColor={selectColorForActiveColorIcon}
            />
          </IconContainer>
        </TouchableOpacity>
      );
    }

    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectColorForActiveColorIcon} />
        </IconContainer>
      );
    }

    return null;
  }, [
    secureTextEntry,
    passwordVisible,
    iconPosition,
    icon,
    selectColorForActiveColorIcon,
  ]);

  return (
    <Container>
      {!!label && (
        <Label color="surface" typography="body3">
          {label}
        </Label>
      )}
      <Border
        color="transparent"
        borderColor={error ? colors.error.main : colors[color].main}>
        {iconPosition === 'left' && renderIcon()}
        <InputInternal
          ref={internalRef}
          secureTextEntry={secureTextEntry && !passwordVisible}
          value={text}
          onChangeText={value => {
            setText(value);
            onChangeText?.(value);
          }}
          {...rest}
        />
        {iconPosition === 'right' && renderIcon()}
      </Border>
      {!!error && (
        <Error style={{color: 'red'}} typography="body">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
