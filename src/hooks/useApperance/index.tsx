import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {Appearance} from 'react-native';
import {themeDark} from '../../constants/styles/theme/dark';
import {themeLigth} from '../../constants/styles/theme/light';
import {colorSchemeProps, Props, themeTypes} from './types';

const useApperance = (): Props => {
    const [currentTheme, setCurrentTheme] = useState<themeTypes>(
        Appearance.getColorScheme() || 'light',
    );

    const handleChangeAppeareance = useCallback(
        ({colorScheme}: colorSchemeProps) => {
            if (colorScheme) {
                setCurrentTheme(colorScheme);
            }
        },
        [],
    );

    const theme = useMemo(() => {
        if (currentTheme === 'light') {
            return themeLigth;
        }
        return themeDark;
    }, [theme]);

    useEffect(() => {
        Appearance.addChangeListener(handleChangeAppeareance);

        return () => Appearance.removeChangeListener(handleChangeAppeareance);
    }, [handleChangeAppeareance]);

    return {currentTheme, theme};
};

export default useApperance;
