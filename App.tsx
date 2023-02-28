import React from 'react';
import {ThemeProvider} from 'styled-components';
import {View} from 'react-native';
import Header from './src/components/Header';
import useApperance from './src/hooks/useApperance';
import TextMain from './src/components/Text';
import Icon from './src/components/Icon';
import Button from './src/components/Button';
import Separator from './src/components/Separator';




const App: React.FC = () => {
   const {theme} = useApperance();
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Header />
               <TextMain typography="h4" color="primary">venancio</TextMain>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <Icon icon='listening' size={130} />
               <Separator width={160} />
               <Icon icon='listening' size={130} />
               </View>
            </View>
            <Button mode='contained'>Change settings</Button>
        </ThemeProvider>
    );
};

export default App;
