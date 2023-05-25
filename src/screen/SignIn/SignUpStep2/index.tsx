import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import { shemaSignUpStep2 } from './validation';
import { StatusBar, useWindowDimensions } from 'react-native';
import HeaderOption from '~/components/HeaderOption';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import Button from '~/components/Button';
import  Bar  from 'react-native-progress/Bar';
import { Container } from './styled';
import BackButton from '~/components/BackButton';

const SignUpStep2: React.FC = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions()

  /**
  * Forms
  */
 const { control, handleSubmit, setValue, formState: {errors}, } = 
  useForm({
    resolver: yupResolver(shemaSignUpStep2),
    defaultValues: {
      password: '',
      confirm_password: '',
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
   await handleSubmit(({password, confirm_password})=> {
    console.log({password, confirm_password});
   })(); 
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOption
        left={<BackButton icon='back' onPress={handleGoBack} />}
        center={<Separator width={spacing.md} />}
        rigth={
          <Bar 
            progress={1}
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
      <TextMain typography="caption">{`Sua senha precisa ter pelo menos \n3 caracteres`}</TextMain>
      <Separator height={spacing.md} />
      
      <Controller 
        control={control}
        name='password'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Senha" 
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.password?.message}
            onChangeText={ text => setValue('password', text)}
            autoCapitalize="none"
            secureTextEntry
            autoCapitalaze="none" 
          />
        )}
      />

      <Controller 
        control={control}
        name='confirm_password'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Confirme a Senha"  
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.confirm_password?.message}
            onChangeText={ text => setValue('confirm_password', text)}
            autoCapitalize="none"
            secureTextEntry
            autoCapitalaze="none"
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Finalizar</Button>
      <Separator height={spacing.md} />
    </Container>
  );
};

export default SignUpStep2;
