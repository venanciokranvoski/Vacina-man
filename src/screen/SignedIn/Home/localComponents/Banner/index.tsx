import React, { useMemo } from 'react';
import { Container } from './styled';
import { BannerProps } from './types';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

const Banner = ({source}: BannerProps) => {
  
  const {spacing} = useTheme()
  const {height, width } = useWindowDimensions()

  const HWBanner = useMemo(()=> {
    if(height > width){
      return {
        h: height * 0.166,
        w: width - 2 * spacing.md,
      };
    }else {
      return {
        h: width * 0.166,
        w: height - 2 * spacing.md,
      }
    }
  },[height, width, spacing])

  return <Container h={HWBanner.h} w={HWBanner.w} source={source} />;
}

export default Banner;