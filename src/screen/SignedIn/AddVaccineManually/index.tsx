import React, { useState } from 'react';
import { Container, ContainerSelect, Content, Scroll } from './styles';
import { useNavigation,  } from '@react-navigation/native';
import { HasSecondShotEnum } from './types';
import { schemaAddVaccineManually } from './validation';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StatusBar } from 'react-native';
import Separator from '~/components/Separator';
import { Pressable } from 'react-native';
import Icon from '~/components/Icon';
import TextMain from '~/components/Text';
import Input from '~/components/Input';
import { useTheme } from 'styled-components/native';
import Button from '~/components/Button';
import Select from './localComponents/Select';

const AddVaccineManually = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme<any>();
  const [hasSecondShot, setHasSecondShot] = useState(HasSecondShotEnum.YES);


  /**
  * Forms
  */
  const {
   control,
   handleSubmit,
   setValue,
   getValue,
   setFocus,
   formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaAddVaccineManually),
    defaultValues:{
      name:               '',
      brand:              '',
      aplicationDate:     '',
      aplicationLocation: '', 
      nextApplicationDate:'',
    },
  });
  
  const onSubmit = async () => {
    await handleSubmit(async dataform => {
      console.log(dataform);
    })();
  }

  return (
    <Container>
      <Scroll>
        <Content>
          <StatusBar barStyle={'dark-content'}></StatusBar>
          <Separator height={spacing.md} />
          <Pressable onPress={goBack}>
            <Icon icon='closeX' size={16} />
          </Pressable>
          <Separator height={spacing.md} />
          <TextMain typography={'h6'}>
            Adicione as informações da vacina
          </TextMain>
          <Separator height={spacing.md} />
          <Controller 
            control={control}
            name='name'
            render={({field:{name, onBlur,onChange, ref, value}}) => (
              <Input 
                label='Nome da vacina'
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text=> setValue(name, text)}
                error={errors[name]?.message}
              />
            )}
          />
          <Separator height={spacing.md} />
          <Controller 
            control={control}
            name='brand'
            render={({field:{name, onBlur,onChange, ref, value}}) => (
              <Input 
                label='Marca da vacina'
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text=> setValue(name, text)}
                error={errors[name]?.message}
              />
            )}
          />
          <Separator height={spacing.md} />
          <Controller 
            control={control}
            name='aplicationDate'
            render={({field:{name, onBlur,onChange, ref, value}}) => (
              <Input 
                label='Data da Aplicação'
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text=> setValue(name, text)}
                error={errors[name]?.message}
              />
            )}
          />
          <Separator height={spacing.sm} />
          <Controller 
            control={control}
            name='aplicationLocation'
            render={({field:{name, onBlur,onChange, ref, value}}) => (
              <Input 
              label='Localda aplicação'
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text=> setValue(name, text)}
                error={errors[name]?.message}
              />
            )}
          />  
          <Separator height={spacing.md} />
          <TextMain>
            Possui segunda dose? 
          </TextMain>
          <Separator height={spacing.sm} />
          <ContainerSelect>
             <Select   
               onPress={()=> setHasSecondShot(HasSecondShotEnum.YES)}
               isSelect={hasSecondShot === HasSecondShotEnum.YES}
               title="Sim"
             />
            <Select   
               onPress={()=> setHasSecondShot(HasSecondShotEnum.NO)}
               isSelect={hasSecondShot === HasSecondShotEnum.NO}
               title="Não"
             />   
            <Select   
               onPress={()=> setHasSecondShot(HasSecondShotEnum.SINGLE)}
               isSelect={hasSecondShot === HasSecondShotEnum.SINGLE}
               title="Dose única"
             />
          </ContainerSelect>
         { hasSecondShot === HasSecondShotEnum.YES &&  (
          <Controller 
            control={control}
            name='nextApplicationDate'
            render={({field:{name, onBlur,onChange, ref, value}}) => (
              <Input 
                label='Data da proxima aplicação'
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onChangeText={text=> setValue(name, text)}
                error={errors[name]?.message}
              />
            )}
          />
         )}
         <Separator height={spacing.md} />
         <Button onPress={onSubmit}>Salvar</Button>
        </Content>
      </Scroll>
    </Container>
  );
}

export default AddVaccineManually;