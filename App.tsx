import React, { useState } from "react";
import { Button, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";

const App : React.FC = () => {
    const [test, setTest] = useState('venancio')

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
        <Header title = "Sr" name={test}  />
        <Button title="click" onPress={handlePressButton} />
    </SafeAreaView>

    )
    }

export default App;