import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {View} from 'react-native';
import Header from './src/components/Header';

import Button from './src/components/Button';
import useApperance from './src/hooks/useApperance';
import TextMain from './src/components/Text';




const App: React.FC = () => {
   const {theme} = useApperance();
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Header />
                <Button
                    onPress={() => {}}
                />
               <TextMain typography="h1" color="primary">melhores momentos</TextMain>
            </View>
        </ThemeProvider>
    );
};

export default App;
