import React from 'react';

import {Container} from './styled';
import HeaderOption from '~/components/HeaderOption';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import Input from '~/components/Input';
import Button from '~/components/Button';
import {Alert, Platform, StatusBar} from 'react-native';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import { Controller, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { shemaLogin } from './validation';
import BackButton from '~/components/BackButton';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import useAuth from '~/hooks/useAuth';

const Login: React.FC = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * useHooks
   */
  const {loading, signIn, checkIfExistsUser, signUp} = useAuth()

  /**
  * Forms
  */
 const { control, handleSubmit, setValue, formState: {errors}, } = 
  useForm({
    resolver: yupResolver(shemaLogin),
    defaultValues: {
      email: __DEV__ ? 'venanciomissions@gmail.com' : '',
      password: __DEV__ ?  '12345678' : ''
    }
  })


  /**
   * useCallback
   */
  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
   await handleSubmit(async({email, password})=> {
    console.log(email, password);
    
    await signIn({email, password})
   })(); 
  }
  

  const handleGoogleSignIn = async ()=> {
   try {
     const {user} = await GoogleSignin.signIn();
   
     const hasUser = await checkIfExistsUser({
      email: user.email,
     })

     if(hasUser){
      await signIn({
        email: user.email,
      });
     }else {
      await signUp({
        ...(user.photo?{avatar: user.photo}: {}),
        ...(user.givenName?{firstName: user.givenName}: {}),
        ...(user.familyName?{lastName: user.familyName}: {}),
        email: user.email,
      })
     }

    } catch (error) {
     console.log(error);
     Alert.alert("Ops!", "Ocorreu um erro ao realizar login");     
   } 
  }


  return (
    <Container>
      <StatusBar barStyle="dark-content"  translucent backgroundColor={'transparent'}/>
      <HeaderOption
        left={
          <BackButton icon='closeX' onPress={handleGoBack} />
        }
        rigth={
          <TextMain color="primary" typography="body3">
            Esqueci minha senha
          </TextMain>
        }
      />
      <Separator height={spacing.md} />
      <TextMain typography="h3">Login</TextMain>
      <Separator height={spacing.md} />
      <Controller 
        control={control}
        name='email'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Email" 
            icon="checkCircle" 
            iconColor="primary" 
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.email?.message}
            onChangeText={text=> setValue('email', text)}
            autoCapitalize="none"
            autoCompleteType="email"
            keybordType="email-address"
          />
        )}
      
      />

      <Controller 
        control={control}
        name='password'
        render={({field: {onBlur, onChange, value, ref}})=> (
          <Input 
            label="Senha" 
            icon="checkCircle" 
            iconColor="primary" 
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
            error={errors.password?.message}
            onChangeText={ text => setValue('password', text)}
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry
          />
        )}
      />

      <Separator height={spacing.md} />
      <Button disabled={loading} loading={loading} onPress={onSubmit}>Login</Button>
      <Separator height={spacing.md} />
      <TextMain typography="body3">ou acesse com login social</TextMain>
      <Separator height={spacing.md} />
     { Platform.OS === 'ios' ?  
      <Button icons={<Icon icon="apple" />} color="secondary" mode="outlined">
        Continuar com a Apple
      </Button> : null}
      <Separator height={spacing.md} />
      <Button onPress={handleGoogleSignIn} icons={<Icon icon="google" />} color="secondary" mode="outlined">
        Continuar com o Google
      </Button>
    </Container>
  );
};

export default Login;
