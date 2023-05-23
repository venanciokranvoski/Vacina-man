import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import { shemaSignUp } from './validation';
import { StatusBar, useWindowDimensions } from 'react-native';
import HeaderOption from '~/components/HeaderOption';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import Button from '~/components/Button';
import  Bar  from 'react-native-progress/Bar';

import { Container, PressebleX } from './styled';
import BackButton from '~/components/BackButton';

const SignUp: React.FC = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions()

  /**
  * Forms
  */
 const { control, handleSubmit, setValue, formState: {errors}, } = 
  useForm({
    resolver: yupResolver(shemaSignUp),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: ''
    }
  })

  /**
   * useMemo
   */
  const widthProgressBar = useMemo(()=> {
    const pressableXWidth = 35;
    const marginScreenWidth = spacing.md * 2
    const centerHeaderOptionsWidth = spacing.md
    const value = width - ( marginScreenWidth + spacing.md + pressableXWidth + centerHeaderOptionsWidth);
    return value; 
  },[width, spacing])


  /**
   * useCallback
   */
  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
   await handleSubmit(({email, firstName, lastName})=> {
    console.log({email, firstName, lastName});
   })(); 
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOption
        left={<BackButton icon='closeX' onPress={handleGoBack} />}
        center={<Separator width={spacing.md} />}
        rigth={
          <Bar 
            progress={0.5}
            color={colors.primary.main}
            unfilledColor={colors.surface100.main}
            borderWidth={0}
            height={6}
            width={widthProgressBar}
          />
        }
      />
      <Separator height={spacing.md} />
      <TextMain typography="h3">Cadastro</TextMain>
      <Separator height={spacing.md} />
      <TextMain typography="caption">Informações pessoais</TextMain>
      <Separator height={spacing.md} />
      
      <Controller 
        control={control}
        name='firstName'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Nome" 
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.firstName?.message}
            onChangeText={ text => setValue('firstName', text)}
            autoCapitalize="none"
          />
        )}
      />

      <Controller 
        control={control}
        name='lastName'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Sobrenome"  
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.lastName?.message}
            onChangeText={ text => setValue('lastName', text)}
            autoCapitalize="none"
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Continuar</Button>
      <Separator height={spacing.md} />
    </Container>
  );
};

export default SignUp;
