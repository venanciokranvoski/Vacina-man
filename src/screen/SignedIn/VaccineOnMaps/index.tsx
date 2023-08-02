import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Header, HeaderContent, HeaderContentRow, InputRow } from './styles';
import Icon from '~/components/Icon';
import { useTheme } from 'styled-components';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import { useNavigation } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import CardMap from './localComponent/cardMap';
import icons from '~/constants/styles/icons';

const VaccineOnMaps: React.FC = () => {
  const {goBack} = useNavigation()
  const {colors, spacing } = useTheme();
  const [selectedMarker, setSelectedMarker] = useState<any>(true)
  return( 
     <View style={styles.container}>
      <Header>
        <HeaderContent>
          <HeaderContentRow>
             <Pressable onPress={goBack}>
                <Icon icon='back' size={17} activeColor={colors.background.main}  />    
             </Pressable>
             <Separator width={spacing.lg} />
             <InputRow>
                <Input
                  icon="search"
                  color="primary"
                  placeholder= 'busque por bairro'
                  iconPosition='left'
                />
             </InputRow>
          </HeaderContentRow>
          <Separator  height={spacing.lg}/>
        </HeaderContent>
      </Header>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker 
      image={icons.mark}
         onPress={e=> {
          console.log(e)
          setSelectedMarker(old=> old)
          
         }}
           coordinate={{
          latitude: 37.7885,
          longitude: -122.4324,
        }}      
       />
    </MapView>
    { !! selectedMarker && (
      <CardMap
       distance='1.5km'
       image={require('~/assets/image/banner/Banner.png')}
       title='Unidade de saude de familia campos de Iguaçu'
      />
    )
    }
  </View>)
}


export default VaccineOnMaps;


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
 
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });