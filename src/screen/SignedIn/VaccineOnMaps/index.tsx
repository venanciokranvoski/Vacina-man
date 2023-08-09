import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
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
import { PlaceDTO } from '~/@types/dtos/place';
import { GetPlaces } from '~/services/resource/places';
import { debounce } from 'lodash'
import { useDebouncedCallback } from 'use-debounce';

const VaccineOnMaps: React.FC = () => {
  const {goBack} = useNavigation()
  const {colors, spacing } = useTheme();

  const [selectedMarker, setSelectedMarker] = useState<PlaceDTO | null>();
  const [places, setPlaces] = useState<Array<PlaceDTO>>([]);
  const [loading, setLoading] = useState(false)
  const [search, setSearchImput] = useState('')
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  /**
   * CallBacks
   */
    const handleFetchPlaces = useCallback(async ()=> {
      try {
        setLoading(true);
        const response = await GetPlaces();
        setPlaces(response);
      } catch (error) {
        Alert.alert("OPs!", "Não foi possivel carregar os locais de Vacinação")
      } finally{
         setLoading(false);
      }
    }, []);

    const handleSearchPlaces = useCallback(async(search?: string) => {
        try {
          setLoading(true)
          setSelectedMarker(null)
          const response = await GetPlaces({search})
          setPlaces(response)

          if(response.length >= 1){
            setRegion(old => ({...old, latitude: Number(response[0].latitude),
               longitude: Number(response[0].longitude)}));
               setSelectedMarker(response[0])
          }
        } catch (error) {
          Alert.alert("Ops !", "Não foi possivel carregar os locais de vacinação")
        }finally {
          setLoading(false)
        }
    }, [ ])


    const debounceHandleSearchPlaces = useDebouncedCallback(
      handleSearchPlaces, 500,
    );

    useEffect(()=> {
      if(search.length === 0 ){
        handleFetchPlaces();
      }
    }, [handleFetchPlaces, search]);
      useEffect(()=> {
        if(search.length > 0){
          debounceHandleSearchPlaces(search);
        }
      }, [debounceHandleSearchPlaces, search])
   
    
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
                  value={search}
                  onChangeText={setSearchImput}
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
      region={region}
      onRegionChangeComplete={setRegion}>
    
      {
        places.map(place => (
          <Marker 
            image={icons.mark}
            onPress={() => {
            setSelectedMarker(selectedMarker?.id === place.id ? null : place)
         }}
           coordinate={{
          latitude: Number(place.latitude),
          longitude: Number(place.longitude),
        }}      
       />
      ))}
    </MapView>
    { !! selectedMarker && (
      <CardMap
       key={selectedMarker.id}
       distance={`${selectedMarker.description} km`}
       image={{uri: `${selectedMarker.picture}?${new Date().getTime()}`}}
       title={selectedMarker.name}
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


