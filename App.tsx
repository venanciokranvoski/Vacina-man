import React, {useRef} from 'react';
import {ThemeProvider} from 'styled-components';
import {Alert, View} from 'react-native';
import Header from './src/components/Header';
import useApperance from './src/hooks/useApperance';
import TextMain from './src/components/Text';
import Icon from './src/components/Icon';
import Button from './src/components/Button';
import Separator from './src/components/Separator';
import Input from './src/components/Input';
import {inputValueRef} from './src/components/Input/types';

const App: React.FC = () => {
    const {theme} = useApperance();

    const refEmail = useRef<inputValueRef>({value: ''});
    const refPassword = useRef<inputValueRef>({value: ''});

    const handlePress = () => {
        Alert.alert(
            refEmail.current?.value || 'nao tem nada',
            refPassword.current?.value || 'sem nenhuma senha ',
        );
    };
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Header />
                <TextMain typography="h4" color="primary">
                    venancio
                </TextMain>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon icon="listening" size={130} />
                    <Separator width={160} />
                    <Icon icon="listening" size={130} />
                </View>
            </View>

            <View>
                <Input
                    ref={refEmail}
                    icon="listening"
                    iconPosition="left"
                    label="E-mail"
                />
                <Input
                    ref={refPassword}
                    label="User not exist"
                    iconPosition="left"
                    secureTextEntry
                    label="Senha"
                />
            </View>

            <Button mode="contained" onPress={handlePress}>
                Change settings
            </Button>
        </ThemeProvider>
    );
};
export default App;
