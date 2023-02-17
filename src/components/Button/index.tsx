import React, {useContext} from 'react';
import {Button as Btn_RN} from 'react-native';
import {ThemeContext} from 'styled-components';

const Button : React.FC<{onPress: ()=> void}> = ({onPress}) => {
    const themeContext = useContext(ThemeContext)
    return (
        <Btn_RN
           color={themeContext.colors.primary.main}
           title='change theme'
           onPress={onPress}
        />

    )
}

export default Button;