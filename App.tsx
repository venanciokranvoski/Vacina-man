import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Header from "./src/components/Header";



const App : React.FC = () => {
    const [test, setTest] = useState<string>('venancio')
    const [t, setT] = useState<string>('Ola')


    // 1 - initialization
    // 2 - Mounting
    // 3 - Updation
    // 4 - Unmounting
    // useEffect(()=> {
    //  if(test === 'venancio'){
    //    setT('gatoooo')
    //  }else {
    //     setT('gatinhaa')
    //  }
    // //  return ()=> Alert.alert('component foi desmontado')
    // }, [test, t])

    /**
     * callback
     *
     */



    /**
     * useCallback mantem uma funçãoo
     *
     */
    console.log(`state do começoo ${test}`);

    const handlePressButton = useCallback(()=> {
        setTest(old => {
            if(old === 'venancio'){
                console.log(`function  ${test}`);
                return 'juju';
            }else {
                console.log(`senaoi ${test}`);

                return 'venancio';
            }
        })
    }, [])

    /**
     * useMemo mantem um value
     */
    //   const nameChanged = useMemo(()=> {
    //      return `${test} | ${new Date()}`
    //   }, [test])

      /**
       * Refs
       */
      const inputRef = useRef<TextInput>({} as TextInput);

    return(
    <SafeAreaView>
        <Header title={t} name='teste'  />
        <Button title="click" onPress={()=> setTest('tuijidjijds')}/>

        <TextInput ref={inputRef}  style={s.in} onChangeText={txt => setTest(txt)} />
    </SafeAreaView>

    )


    }

export default App;

const s = StyleSheet.create({
    in: {
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 15
    }
})