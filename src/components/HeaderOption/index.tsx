import React, {useMemo} from 'react';
import {Container} from './styled';
import {HeaderOptionsProps} from './types';
import Separator from '../Separator';
import {useTheme} from 'styled-components';
import {StatusBar} from 'react-native';

const HeaderOption = ({
  left = <Separator />,
  center = <Separator />,
  rigth = <Separator />,
}: HeaderOptionsProps) => {
  const {spacing} = useTheme();

  const heigthSeparator = useMemo(() => {
    return StatusBar.currentHeight
      ? StatusBar.currentHeight + spacing.md
      : spacing.md;
  }, [spacing]);
  return (
    <>
      <Separator height={heigthSeparator} />
      <Container>
        {left}
        {center}
        {rigth}
      </Container>
    </>
  );
};

export default HeaderOption;
