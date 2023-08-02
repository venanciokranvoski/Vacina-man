import React, { useMemo } from 'react';
import { StatusBar, Pressable, useWindowDimensions } from 'react-native';
import { Container, Content, Scroll } from './styles';
import Separator from '~/components/Separator';
import { useTheme } from 'styled-components';
import Icon from '~/components/Icon';
import { useNavigation } from '@react-navigation/native';
import TextMain from '~/components/Text';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrCode: React.FC = () => {
   const { spacing } = useTheme()
   const {goBack} = useNavigation()
   const {width} = useWindowDimensions()

   const cameraStyle = useMemo(() => ({
    marginTop: 40,
    flex: 0,
    alignSelf:  'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: width * 0.7,
    width: width * 0.7,


   }as ViewStyle), [width])

    return (
    <Container>
        <Scroll>
            <Content>
                <StatusBar barStyle={'dark-content'} />
                <Separator height={spacing.md} />
                <Pressable onPress={goBack}>
                    <Icon icon='closeX' size={20} />
                </Pressable>
                <Separator height={spacing.md} />
                <TextMain typography='h6'>Ler Qr Code</TextMain>
                <Separator height={spacing.lg} ww/>
                <TextMain typography="caption">Posicione o código QR dentro da área</TextMain>
                <Separator height={spacing.sm} />
                </Content> 
                <QRCodeScanner 
                   cameraStyle={cameraStyle}
                   onRead={e=>console.log(e.data)} 
                   flashMode={RNCamera.Constants.FlashMode.torch}
                >

                </QRCodeScanner>
        </Scroll>
    </Container>

  );
}

export default QrCode;