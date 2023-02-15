import React, { useState, useEffect } from "react";
import { Alert, Button, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";



const App : React.FC = () => {
    const [test, setTest] = useState<string>('venancio')
    const [t, setT] = useState<string>('Ola')


    // 1 - initialization
    // 2 - Mounting
    // 3 - Updation
    // 4 - Unmounting
    useEffect(()=> {
    console.log('montou');
     if(test === 'venancio'){
       setT('gatoooo')
     }else {
        setT('gatinhaa')
     }
     return ()=> Alert.alert('component foi desmontado')
    }, [test, t])

    /**
     * callback
     *
     */
    const handlePressButton = () => {
        setTest(old => {
            if(old === 'venancio'){
                return 'juju';
            }else {
                return 'venancio';
            }
        })
    }

    return(
    <SafeAreaView>
        <Header title={t} name={test}  />
        <Button title="click" onPress={handlePressButton} />
    </SafeAreaView>

    )
    }

export default App;